import { IconProps } from 'iconsax-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Link({
  Icon,
  name,
  href,
  isOpen,
}: {
  Icon: React.FC<IconProps>;
  name: string;
  href: string;
  isOpen: boolean;
}) {
  const location = useLocation();
  console.log(
    '🚀 ~ file: Link.tsx:18 ~ location:',
    location.pathname.split('/')[1],
    name.toLocaleLowerCase(),
  );

  return (
    <li>
      <NavLink
        to={href}
        className={`flex ${
          name.toLocaleLowerCase() === location.pathname.split('/')[1] ||
          location.pathname === href
            ? 'bg-gray-100 dark:bg-gray-700 text-primary-800 dark:text-primary-500'
            : ''
        } duration-300 hover:scale-[97%] hover:transform items-center transition-all  p-2 text-gray-900 rounded-lg dark:text-[grey] hover:dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group`}
      >
        <div className="w-[25px] h-[25px]">
          {' '}
          <Icon size={25} variant="Bulk" />
        </div>
        <span className={isOpen ? 'hidden' : 'ml-3'}>{name}</span>
      </NavLink>
    </li>
  );
}
