"use client";

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="text-purple-900" />
        <h1 className="text-purple-900 text-4xl font-bold">NOT FOUND</h1>
        <Link
          href="/"
          className="text-black transition-all hover:text-purple-900 underline"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Page;
