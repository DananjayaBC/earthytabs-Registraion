import React from "react";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* SVG Logo */}
      <svg
        className="h-16 w-16 md:h-24 md:w-24 text-white" // Adjust size and color
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
      {/* Title */}
      <h1 className="mb-4 text-3xl font-semibold text-slate-300 md:text-5xl">
        {title}
      </h1>
      {/* Subtitle */}
      {subtitle && (
        <span className="text-sm text-center font-light text-slate-400 md:text-xl">
          {subtitle}
        </span>
      )}
    </div>
  );
}
