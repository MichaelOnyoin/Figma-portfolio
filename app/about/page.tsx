import React from 'react';
import ImageComponent from '@/components/ImageComponent';
import TextContent from '@/components/TextContent';
//import Layout from '@/components/Layout';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
//interface AboutMeProps {}

const AboutMe: React.FC = () => {
  return (
    <div>
    
    <main className="flex justify-center items-center px-16 py-20 bg-gray-800 max-md:px-5">
      
      <div className="mt-14 w-full max-w-[1234px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <ImageComponent
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/075df715a7404fd1218312e7b9892f4be586a17b0b59b4c28ace0f131ffef163?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
                alt=""
                className="border-2 border-solid aspect-[1.32] border-teal-500 border-opacity-50 stroke-[1.663px] stroke-teal-500 stroke-opacity-50 w-[63px]"
              />
              <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                    <h1 className="self-stretch my-auto text-6xl font-bold text-teal-500 max-md:mt-10 max-md:text-4xl">
                      <span className="text-zinc-100">About</span>{" "}
                      <span className="text-teal-500">me</span>
                    </h1>
                  </div>
                  <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                    <ImageComponent
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5f59fab499fbb08925b6b1cea7a362203a63121f008f2c18090654c457b1246?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
                      alt=""
                      className="grow shrink-0 aspect-[0.78] w-[78px] max-md:mt-8"
                    />
                  </div>
                </div>
              </div>
              <TextContent />
              <ImageComponent
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/21b0d02081ae81c306a49f1137b0ea6a97a1f49349f7ad3bfa3a5ada52d7b42c?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
                alt=""
                className="self-center mt-24 max-w-full border-4 border-solid aspect-[0.97] border-teal-500 border-opacity-20 stroke-[4px] stroke-teal-500 stroke-opacity-20 w-[146px] max-md:mt-10"
              />
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <ImageComponent
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e656925463eac88d9bf9f96a7da52d944286456f55fcf0e57074f3263059bc8?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
              alt="About me visual representation"
              className="grow mt-24 w-full aspect-[1.12] max-md:mt-10 max-md:max-w-full"
            />
          </section>
        </div>
      </div>
    </main>
    
   </div>
  );
};

export default AboutMe;
