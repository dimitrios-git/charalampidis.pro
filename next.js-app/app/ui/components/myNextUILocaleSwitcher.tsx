'use client';

import React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { MdTranslate } from 'react-icons/md';
import { usePathname } from '@/navigation';

const MyNextUILocaleSwitcher = () => {
  const pathname = usePathname();

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="cursor-pointer flex items-center">
          <MdTranslate />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language Menu" className="w-[110px]">
        <DropdownItem startContent="🇺🇸" href="/en-US">
          English
        </DropdownItem>
        <DropdownItem startContent="🇩🇪" href="/de-DE">
          Deutsch
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyNextUILocaleSwitcher;
