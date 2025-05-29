import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="px-20 py-12 max-md:px-5 max-md:max-w-full">
      <ul className="flex gap-5 max-md:flex-col">
        <li className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
          <a href="#" className="text-lg text-zinc-100 max-md:mt-10">Home</a>
        </li>
        <li className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
          <a href="/about" className="text-lg text-zinc-100 max-md:mt-10">About Me</a>
        </li>
        <li className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <a href="#" className="text-lg text-zinc-100 max-md:mt-10">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;