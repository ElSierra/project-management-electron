import React from 'react';
import Header from '../LeftPanel/Header';
import { SearchNormal, SearchNormal1 } from 'iconsax-react';

export default function Nav({
  handleClick,
  isOpen,
}: {
  handleClick: () => void;
  isOpen: boolean;
}) {
  return (
    <div
      className={`w-full fixed z-50 h-[55px]  transition-all  border-b items-center  p-4   border-gray-200  border-r  dark:border-gray-700    top-0 flex `}
    >
      <Header onClick={handleClick} isOpen={isOpen} />
      <button className="w-[25%] dark:bg-card-dark bg-card-light  rounded-md flex items-center px-4 py-[6px] gap-4 ">
        <SearchNormal1 variant={'TwoTone'} className="dark:text-card-text-dark" />
        <p className="dark:text-card-text-dark text-sm " >Search for anything...</p>
      </button>
    </div>
  );
}
