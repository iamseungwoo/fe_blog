import { Link } from "react-router-dom";
import { BiLogoGmail } from "react-icons/bi";
import { RiGithubFill, RiTwitterXFill } from "react-icons/ri";
import React from "react";

const Footer = () => {
    return (
        <footer className="pb-8 text-sm text-neutral-800 dark:text-neutral-400 mt-5">
            <hr className="border-1 w-full border-neutral-300 transition-all dark:border-neutral-700 mb-8" />
            <div className="flex flex-col items-end space-y-1">
                <div className="flex space-x-2">
                    <Link
                        to="mailto:qusseun@gmail.com"
                        className="text-primary transition hover:text-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BiLogoGmail />
                    </Link>
                    <Link
                        to="https://github.com/iamseungwoo"
                        className="text-primary transition hover:text-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <RiGithubFill />
                    </Link>
                    <Link
                        to="https://x.com/quseun"
                        className="text-primary transition hover:text-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <RiTwitterXFill />
                    </Link>
                </div>
                <p>
                    <span>© 2022-2023 </span>
                    <Link
                        to="/"
                        className="text-primary transition hover:text-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        qyinm blog
                    </Link>
                    <span> Powered by </span>
                    <Link
                        to="https://nextjs.org/"
                        className="text-primary transition hover:text-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Next.js
                    </Link>
                    <span>, </span>
                    <Link
                        to="https://vercel.com/"
                        className="text-primary transition hover:text-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vercel
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
