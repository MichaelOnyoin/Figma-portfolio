import React from 'react';

interface HeaderProps {
  activeTab: string;
}

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  const tabs = ['Home', 'About', 'Services','Contact', 'Projects','Resume',];

  return (
    <header className="flex relative flex-col sticky top-0 z-50 items-center self-center w-full max-md:max-w-full">
      <nav className="mt-5 border-0 fixed sticky top-0 flex z-0 flex-wrap gap-3.5 justify-between items-center px-2.5 max-w-full bg-neutral-800 min-h-[66px] rounded-[50px] bg-opacity-50">
        {tabs.map((tab) => (
          <a
            key={tab}
            href={`/${tab.toLowerCase()}`}
            className={`overflow-hidden gap-2.5 self-stretch px-10 py-5 my-auto text-xl hover:bg-teal-500 ${
              activeTab === tab.toLowerCase()
                ? 'font-bold bg-teal-500'
                : ''
            } tracking-tight text-white whitespace-nowrap rounded-[60px] max-md:px-5`}
          >
            {tab}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;