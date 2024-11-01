import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center pb-16">
      <div className="flex gap-5 justify-between px-5 w-full max-w-[1344px] max-md:flex-wrap max-md:max-w-full">
        <h1 className="my-auto text-2xl font-bold text-zinc-100">
          Onyoin Design
        </h1>
        <Navigation />
      </div>
      <div className="self-stretch mt-2 w-full border border-solid bg-zinc-100 bg-opacity-10 border-zinc-100 border-opacity-10 min-h-[1px] max-md:max-w-full" />
    </header>
  );
};

export default Header;