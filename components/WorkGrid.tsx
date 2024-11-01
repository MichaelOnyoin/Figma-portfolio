import React from 'react';
import WorkItem from './WorkItem';

const works = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8ad5526321755d9963aa0dce470f313368f817f71b0d8cdc2f96d4ccc366767?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", alt: "Work sample 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/11a3d2220aec7d05a43243b8cd6ecde1024d615641b7c0bed3be8dee8b21ff13?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", alt: "Work sample 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f2707900aeeb97ceecdc72b465f7ec5d173a2ea49f2fb0873675518235a7eb8?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", alt: "Work sample 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b885ac3dd977df92de8fd4b4b69f66babd25f23c467331bdb8f0eaf34e3c00d?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", alt: "Work sample 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa10f7d7ae5cfb9ef954e6915aa1d901b8a54e148aed165e73c31dd96c32de4e?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", alt: "Work sample 5" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecdb79a10bb1013e2d521a5c5146ee0a705f7cf39ed3cd15ebfb064d894badb1?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", alt: "Work sample 6" },
];

const WorkGrid: React.FC = () => {
  return (
    <div className="z-10 self-center px-5 mt-12 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 flex-wrap max-md:flex-col">
        {works.map((work, index) => (
          <WorkItem key={index} src={work.src} alt={work.alt} />
        ))}
      </div>
    </div>
  );
};

export default WorkGrid;