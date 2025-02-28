import Image from "next/image";
import React from "react";

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* SVG Logo */}
      <a href="https://earthytabs-landing.vercel.app/">
        {/* <svg
          className="h-16 w-16 md:h-24 md:w-24 text-white" // Adjust size and color
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="./"
        > */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={300} // Specify a width (adjust based on your w-30 className)
          height={100} // Specify a height (adjust based on your h-7 className)
          className="w-300 h-100"
        />
        {/* <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg> */}
      </a>
      {/* Title */}
      <h1 className="mb-4 text-2xl font-semibold text-slate-300 md:text-5xl">
        {title}
      </h1>
      {/* Subtitle */}
    </div>
  );
}
