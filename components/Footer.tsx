import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center px-20 pt-20 pb-12 mb-0 max-md:px-5">
      <nav className="flex gap-5 justify-between mt-5 text-lg text-zinc-100 max-md:flex-wrap">
        <a href="#" className="flex gap-2.5 p-2.5 whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aa15eae81e339cdbc65d11eaa1ae69b2b17658003c85c860d9225398162d7f6?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="shrink-0 self-start w-6 aspect-square" />
          <span>Home</span>
        </a>
        <a href="#" className="flex gap-2.5 p-2.5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce7e4f27685ca121d7bcc6b7e868e69482656aeab510b4e20978b11e358b6957?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="shrink-0 self-start w-6 aspect-square" />
          <span>About me</span>
        </a>
        <a href="#" className="flex gap-2.5 p-2.5 whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1066359d7aa5eb1dfe8a2e9c57c228d60515df4f5787e965917e0a75a41cc614?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="shrink-0 self-start w-6 aspect-square" />
          <span>Contact</span>
        </a>
      </nav>
      <div className="flex gap-5 justify-between mt-10">
        <a href="#" aria-label="Social media link">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf7483c75f729f2c80ae8dfd047aef6cce222d68c101fec42fd00270747ad14e?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="shrink-0 w-12 aspect-square" />
        </a>
        <a href="#" aria-label="Social media link">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1b4fe17cfb037f1031e5bd655392698b25ad7d19ef8fe34f32107f660a67abf?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="shrink-0 w-12 aspect-square" />
        </a>
        <a href="#" aria-label="Social media link">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/237bc13398695e9e07324f4ecbc8ba37a3990b7098876ea44245b6b4158e6579?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="shrink-0 w-12 aspect-square" />
        </a>
        <a href="#" aria-label="Social media link">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d0069a0c68235668202e47d74fc5ffb69a6e1b8299b70a9645b34a26d96cc48?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="shrink-0 w-12 aspect-square" />
        </a>
      </div>
      <div className="self-end mt-24 text-lg text-zinc-100 text-opacity-80 max-md:mt-10 max-md:mr-2.5">
        <a href="#">Terms of Service</a> - <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;