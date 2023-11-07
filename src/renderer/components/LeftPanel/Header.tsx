import QLight from '../../assets/q-light.svg';

import { ArrowLeft2 } from 'iconsax-react';
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
export default function Header({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <div
      className={` transition-all   flex justify-between ${
        isOpen ? 'w-[65px]' : 'w-[240px]'
      }   items-center `}
    >
      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-3 duration-300 hover:scale-90 hover:transform"
          onClick={onClick}
        >
          <img src={QLight} width={30} className="w-[30px] min-w-[30px]" />{' '}
        </button>
        <p className={isOpen ? 'hidden transition-all' : 'transition-all'}>
          QuiTasks
        </p>
      </div>
      <button
        onClick={onClick}
        className={`transition-all rounded-full p-2 mr-4 ${
          isOpen ? 'hidden' : ''
        } duration-300 hover:scale-90 hover:transform hover:bg-[#7e7b7bb7] focus:outline-none `}
      >
        <DoubleArrowLeftIcon />
      </button>
    </div>
  );
}
