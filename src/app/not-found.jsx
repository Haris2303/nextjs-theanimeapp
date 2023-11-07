"use client";

import { FileSearch } from "@phosphor-icons/react";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <FileSearch size={32} className="text-color-accent" />
      <h3 className="text-color-accent text-3xl text-center">Not Found</h3>
    </div>
  );
};

export default Page;
