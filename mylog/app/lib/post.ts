import dayjs from 'dayjs';
import { readFileSync } from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';
import readingTime from 'reading-time';
import { Order } from './type/Order';

const BASE_PATH = '/article';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

type PostMatter = {
  title: string;
  description: string;
  tags: string[];
  draft?: boolean;
  date: string;
  series: string;
};

export type Post = PostMatter & {
  slug: string;
  content: string;
  readingMinutes: number;
  wordCount: number;
};

export const getAllPosts = cache(() => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);

  return postPaths.reduce<Post[]>((ac, postPath) => {
    const post = parsePost(postPath);
    return !post ? ac : [...ac, post];
  }, []);
});

const parsePost = (postPath: string): Post | undefined => {
  try {
    const file = readFileSync(postPath, { encoding: 'utf-8' });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    if (grayMatter.draft) {
      return;
    }

    return {
      ...grayMatter,
      tags: grayMatter.tags && grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format('YYYY.MM.DD'),
      content,
      slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace('.mdx', ''),
      readingMinutes: Math.ceil(readingTime(content).minutes),
      wordCount: content.split(/\s+/gu).length,
    };
  } catch (e) {
    console.error(e);
  }
};

export const getAllSeries = () => {
  return [
    ...new Set(
      getAllPosts()
        .map(post => post.series)
        .filter(series => series != ''),
    ),
  ];
};

export const getPostWithSeries = (series: string, order: Order = 'asc') => {
  const posts =
    order === 'asc' ? getPostsSortDateAsc() : getPostsSortDateDesc();
  return posts.filter(post => post.series === series);
};

export const getAllTags = () => {
  const posts = getAllPosts();

  return [
    ...new Set(posts.reduce((acc, curr) => acc.concat(curr.tags), [''])),
  ].filter(tag => tag !== '');
};

export const getPostsWithTag = (tag: string) => {
  return getAllPosts().filter(post => post.tags.includes(tag));
};

export const getPostsSortDateDesc = cache(() => {
  return getAllPosts().sort((a, b) => b.date.localeCompare(a.date));
});

export const getPostsSortDateAsc = cache(() => {
  return getAllPosts().sort((a, b) => a.date.localeCompare(b.date));
});
