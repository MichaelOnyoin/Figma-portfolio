import React from 'react';

//interface TextContentProps {}

const TextContent: React.FC = () => {
  return (
    <p className="mt-3 text-lg text-zinc-100 max-md:max-w-full">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....{" "}
      <span className="font-bold text-zinc-100">Read more</span>
    </p>
  );
};

export default TextContent;