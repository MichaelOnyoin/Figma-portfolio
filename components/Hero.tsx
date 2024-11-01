import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="mt-40 w-full max-w-[1275px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <h2 className="text-8xl leading-[96px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            <span className="text-zinc-100">CREATIVE UI/UX</span>{" "}
            <span className="text-teal-500">DESIGNER</span>
          </h2>
          <div className="flex flex-col grow mt-10 font-bold max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-4 max-md:flex-wrap">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46de12bf90a69d30dd44598315673a64251bc0a18ce9b6b6e90554f43a68a603?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="shrink-0 my-auto border-solid aspect-[0.33] border-[5px] border-teal-500 border-opacity-20 stroke-[5px] stroke-teal-500 stroke-opacity-20 w-[77px]" />
              <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit max-md:max-w-full">
                <div className="flex gap-5 justify-between self-start mt-12 text-lg text-zinc-100 max-md:mt-10">
                  <button className="px-8 py-2.5 bg-teal-500 rounded-3xl max-md:px-5">
                    Hire me
                  </button>
                  <button className="flex gap-2.5 px-8 py-2.5 rounded-3xl backdrop-blur-[2px] bg-zinc-700 bg-opacity-80 max-md:px-5">
                    Download CV
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3e68be090d5f718a3a3f4f0513996372d1a338c1d11efb1fcb57a23d5d13b67?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="shrink-0 my-auto w-6 aspect-square" />
                  </button>
                </div>
              </div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d75e161cbef9bac83848a5880add9bcc99ee833883542121a3976acdba878778?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="self-center mt-36 ml-20 w-24 backdrop-blur-sm aspect-square fill-zinc-700 fill-opacity-80 max-md:mt-10" />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/136e12b46f75e8c0130b6cc1531d3c788e0a7b933cd5d96b7ec8e733d97b7cab?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Designer portrait" className="w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;