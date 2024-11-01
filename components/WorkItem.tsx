import React from 'react';

interface WorkItemProps {
  src: string;
  alt: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ src, alt }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center px-12 py-16 w-full rounded-2xl backdrop-blur-[2px] bg-zinc-700 bg-opacity-50 max-md:px-5 max-md:mt-10">
        <img loading="lazy" src={src} alt={alt} className="w-full aspect-[1.67]" />
      </div>
    </div>
  );
};

export default WorkItem;