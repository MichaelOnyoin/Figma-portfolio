import React from 'react';
import WorkFilter from './WorkFilter';
import WorkGrid from './WorkGrid';

const RecentWorks: React.FC = () => {
  return (
    <section className="flex flex-col pt-20">
      <h2 className="self-start mt-48 ml-32 text-6xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <span className="text-zinc-100">My recent</span>{" "}
        <span className="text-teal-500">works</span>
      </h2>
      <WorkFilter />
      <WorkGrid />
    </section>
  );
};

export default RecentWorks;