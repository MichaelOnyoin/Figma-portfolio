"use client";
import * as React from "react";

interface InputFieldProps {
  label: string;
  type: "text" | "email";
  placeholder: string;
  name?: string;
}

function InputField({ label, type, placeholder, name }: InputFieldProps) {
  return (
    <div className="flex flex-col flex-1 gap-2.5 items-start w-full">
      <label className="text-lg font-bold leading-normal text-zinc-100 max-sm:text-base">
        {label}
      </label>
      <div className="flex gap-2.5 items-start px-6 py-4 w-full rounded-2xl bg-zinc-700 bg-opacity-50">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full text-lg leading-normal bg-transparent focus:outline-none text-zinc-100  max-sm:text-base"
        />
      </div>
    </div>
  );
}

export default InputField;
