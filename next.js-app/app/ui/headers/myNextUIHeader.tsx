import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/app/ui/components/localeSwitcher';
import { ThemeSwitcher } from '@/app/ui/components/themeSwitcher';

const MyNextUIHeader = () => {
  const t = useTranslations('MyNextUIHeader');

  return (
    <header>
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
          <NavbarItem className="hidden lg:flex">
            <LocaleSwitcher />
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default MyNextUIHeader;
