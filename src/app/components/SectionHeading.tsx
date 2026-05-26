import React from 'react';

export function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 relative inline-block mb-4">
        {title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600 rounded-full"></span>
      </h2>
      {subtitle && <p className="text-gray-600 text-lg mt-4">{subtitle}</p>}
    </div>
  );
}
