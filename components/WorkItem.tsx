import React from 'react';

interface WorkItemProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ src, alt, description, title }) => {
  return (
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full group hover:cursor-pointer relative ">
      <div className="flex flex-col grow justify-center px-12 py-16 w-full rounded-2xl backdrop-blur-[2px] bg-zinc-700 bg-opacity-50 max-md:px-5 max-md:mt-10">
        <img loading="lazy" src={src} alt={alt} className="w-full aspect-[1.67]" />
      </div>
      <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-4 mx-2 mb-4 float rounded-lg hidden group-hover:block'>
        <h4 className="gap-2.5 pt-5 pb-2.5 text-2xl font-bold tracking-tighter whitespace-nowrap text-white max-md:mt-10 max-md:text-lg">
          {title}
        </h4>
      <p className="text-white text-lg">{description}</p>
      </div>
    </div>
  );
};

export default WorkItem;