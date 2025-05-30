"use client";
import * as React from "react";

interface TextAreaFieldProps {
  label: string;
  placeholder: string;
  name?: string;
}

function TextAreaField({ label, placeholder, name }: TextAreaFieldProps) {
  return (
    <div className="flex flex-col gap-2.5 items-start w-full">
      <label className="text-lg font-bold leading-normal text-zinc-100 max-sm:text-base">
        {label}
      </label>
      <div className="flex gap-2.5 items-start px-6 py-4 w-full rounded-2xl bg-zinc-700 bg-opacity-50 h-[280px] max-sm:h-[200px]">
        <textarea
          placeholder={placeholder}
          name={name}
          className="text-lg leading-normal bg-transparent resize-none size-full text-zinc-100 focus:outline-none max-sm:text-base"
        />
      </div>
    </div>
  );
}

export default TextAreaField;
export type { TextAreaFieldProps };