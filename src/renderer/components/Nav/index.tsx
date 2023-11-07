import React from 'react';
import Header from '../LeftPanel/Header';

export default function Nav({ handleClick, isOpen}: {handleClick: () => void, isOpen: boolean}) {
  return (
    <div
      className={`w-full fixed z-50 h-[60px]  border-b items-center  p-4  justify-between border-gray-200  border-r  dark:border-gray-700    top-0 flex `}
    >
      <Header onClick={handleClick} isOpen={isOpen} />
    </div>
  );
}
