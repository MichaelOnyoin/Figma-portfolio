import React from 'react';

const filters = ['All', 'UI', 'UX', 'Web Design'];

const WorkFilter: React.FC = () => {
  return (
    <div className="flex gap-4 self-start pr-14 mt-4 ml-32 text-lg font-bold text-zinc-100 max-md:flex-wrap max-md:pr-5">
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`px-8 py-2.5 whitespace-nowrap rounded-3xl max-md:px-5 ${
            index === 0 ? 'bg-teal-500' : 'backdrop-blur-sm bg-zinc-700 bg-opacity-50'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default WorkFilter;