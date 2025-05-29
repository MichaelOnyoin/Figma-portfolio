'use client'
import React,{useState} from 'react';
import WorkItem from './WorkItem';

type Category =  'All'| 'UI'| 'UX'| 'Web Design';

interface WorkItem {
  id: number;
  image: string;
  categories: Category[];
}


const workItems: WorkItem[] = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8ad5526321755d9963aa0dce470f313368f817f71b0d8cdc2f96d4ccc366767?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
    categories: ["All", "UI", "UX"],
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/11a3d2220aec7d05a43243b8cd6ecde1024d615641b7c0bed3be8dee8b21ff13?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
    categories: ["All", "Web Design"],
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f2707900aeeb97ceecdc72b465f7ec5d173a2ea49f2fb0873675518235a7eb8?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&",
    categories: ["All", "UI"],
  },
  {
    id:4,
    image:'/careviewlogo(2).svg',
    categories:["All","Web Design"]

  },
  {
    id:5,
    image:'/chatbot.svg',
    categories:["All","Web Design"]

  },
];

//const categories: Category[] = ["All", "UI", "UX", "Web Design"];

const filters: Category[] = ["All", "UI", "UX", "Web Design"];

const WorkFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  
    const filteredItems = workItems.filter((item) =>
      selectedCategory === "All" ? true : item.categories.includes(selectedCategory)
    );
  return (
    <div>
      <h2 className="self-start mt-48 ml-32 text-6xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <span className="text-zinc-100">My recent</span>{" "}
        <span className="text-teal-500">works</span>
      </h2>
    <div className="flex gap-4 self-start pr-14 mt-4 ml-32 text-lg font-bold text-zinc-100 max-md:flex-wrap max-md:pr-5">
      {filters.map((cat) => (
        <button
          key={cat}
          className={`px-8 py-2.5 whitespace-nowrap rounded-3xl max-md:px-5 ${
            selectedCategory === cat ? 'bg-teal-500' : 'backdrop-blur-sm bg-zinc-700 bg-opacity-50'
          }`}
           onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
        {filteredItems.map((item) => (
         
          <div className='mx-4 mt-10'  key={item.id}>
            
            <WorkItem src={item.image} alt={`Work ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFilter;