// @/app/ui/headers/myNextUIHeader.tsx

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import MyNextUILocaleSwitcher from '@/app/ui/components/myNextUILocaleSwitcher';
import { ThemeSwitcher } from '@/app/ui/components/themeSwitcher';

const MyNextUIHeader = () => {
  const t = useTranslations('MyNextUIHeader');

  return (
    <header className="sticky top-0 z-50">
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">{t('Navbar.Brand')}</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              {t('Navbar.NavLink')} 1
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              {t('Navbar.NavLink')} 2
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex space-x-2">
            <MyNextUILocaleSwitcher />
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default MyNextUIHeader;
