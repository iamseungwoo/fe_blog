'use client';

import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../component/Editor/Tui'), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <Editor initValue="write your content!" />
    </div>
  );
}
