import React, { useState } from 'react';
import Header from './Header';
import Nav from '../Nav';
import Link from '../../screens/Home/components/PanelLinks/Link';
import { HomeIcon } from '@radix-ui/react-icons';
import {
  Category,
  Home,
  Messages,
  Profile2User,
  Setting,
  Task,
} from 'iconsax-react';

export default function LeftPanel({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className=" flex">
      <aside
        id="logo-sidebar"
        className={`  pt-[40px]  top-0 left-0 z-40 w-64 min-h-screen ${
          isOpen ? 'w-[65px]' : 'w-[250px]'
        }  transition-all -translate-x-full duration-500 bg-white border-r border-gray-200 sm:translate-x-0  dark:bg-[#242529] dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className=" px-3 pb-4 overflow-y-auto pt-10 bg-white dark:bg-[#242529]">
          <ul className="space-y-2 font-medium">
            <Link Icon={Category} name="Home" href="/" isOpen={isOpen} />{' '}
            <Link
              Icon={Messages}
              name="Messages"
              href="/messages"
              isOpen={isOpen}
            />
            <Link Icon={Task} name="Tasks" href="/tasks" isOpen={isOpen} />
            <Link
              Icon={Profile2User}
              name="Members"
              href="/members"
              isOpen={isOpen}
            />
            <Link
              Icon={Setting}
              name="Settings"
              href="/settings"
              isOpen={isOpen}
            />
          </ul>
        </div>
      </aside>
    </div>
  );
}
