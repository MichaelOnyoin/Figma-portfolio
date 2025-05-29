'use client'

type Category = "All" | "UI" | "UX" | "Web Design";

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
];


import { useState } from "react";


const categories: Category[] = ["All", "UI", "UX", "Web Design"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredItems = workItems.filter((item) =>
    selectedCategory === "All" ? true : item.categories.includes(selectedCategory)
  );

  return (
    <div className="p-4 bg-gray-800 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">
        My recent <span className="text-teal-400">works</span>
      </h1>

      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedCategory === cat
                ? "bg-teal-400 text-black"
                : "bg-gray-700 text-white"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className=" rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              alt={`Work ${item.id}`}
              className="w-full h-78 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
