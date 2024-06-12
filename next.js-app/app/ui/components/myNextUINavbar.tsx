// @/app/ui/components/myNextUINavbar.tsx

'use client';

import React from 'react';
import {
  Dropdown,
  NavbarMenu,
  NavbarMenuItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Divider,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from '@nextui-org/react';
import { MdTranslate } from 'react-icons/md';
import { ThemeSwitcher } from '@/app/ui/components/themeSwitcher';
import { useRouter, usePathname } from 'next/navigation';

export interface MyNextUINavbarProps {
  translations: {
    brand: string;
    navLink1: string;
    navLink2: string;
    languageMenu: string;
  };
}

const MyNextUINavbar = ({ translations }: MyNextUINavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const supportedLocales = ['en-US', 'de-DE'];

  const getCurrentLocale = () => {
    const localePrefix = pathname.split('/')[1];
    return supportedLocales.includes(localePrefix) ? localePrefix : 'en-US';
  };

  const switchLocale = (locale: string) => {
    const currentLocale = getCurrentLocale();
    const newPathname = pathname.replace(`/${currentLocale}`, '') || '/';
    router.push(`/${locale}${newPathname}`);
  };

  const currentLocale = getCurrentLocale();
  const homeUrl = `/${currentLocale}`;
  const resumeUrl = `/${currentLocale}/resume`;
  const blogUrl = `/${currentLocale}/blog`;

  const isActive = (url: string) => pathname === url;

  return (
    <Navbar
      isBordered={false}
      isBlurred={true} // Safari is having issues with backdrop-filter
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link href={homeUrl} className="font-bold text-inherit">
          {translations.brand}
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {isActive(resumeUrl) ? (
          <NavbarItem isActive>
            <Link href={resumeUrl}>{translations.navLink1}</Link>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Link href={resumeUrl}>{translations.navLink1}</Link>
          </NavbarItem>
        )}
        {isActive(blogUrl) ? (
          <NavbarItem isActive>
            <Link href={blogUrl} aria-current="page">
              {translations.navLink2}
            </Link>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Link href={blogUrl} aria-current="page">
              {translations.navLink2}
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex space-x-4">
          <Dropdown>
            <DropdownTrigger>
              <div className="cursor-pointer flex items-center">
                <MdTranslate />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label={translations.languageMenu}>
              <DropdownItem key="en-US" onClick={() => switchLocale('en-US')}>
                🇺🇸 English
              </DropdownItem>
              <DropdownItem key="de-DE" onClick={() => switchLocale('de-DE')}>
                🇩🇪 Deutsch
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle className="md:hidden" />
      </NavbarContent>
      <NavbarMenu>
        <div className="max-w-screen-lg mx-auto p-4">
          <div className="flex flex-col md:flex-row">
            {isActive(resumeUrl) ? (
              <NavbarMenuItem className="sm:hidden" isActive>
                <Link href={resumeUrl}>{translations.navLink1}</Link>
              </NavbarMenuItem>
            ) : (
              <NavbarMenuItem className="sm:hidden">
                <Link href={resumeUrl}>{translations.navLink1}</Link>
              </NavbarMenuItem>
            )}
            {isActive(blogUrl) ? (
              <NavbarMenuItem className="sm:hidden" isActive>
                <Link href={blogUrl} aria-current="page">
                  {translations.navLink2}
                </Link>
              </NavbarMenuItem>
            ) : (
              <NavbarMenuItem className="sm:hidden">
                <Link href={blogUrl} aria-current="page">
                  {translations.navLink2}
                </Link>
              </NavbarMenuItem>
            )}
            <Divider orientation="horizontal" className="my-4 sm:hidden" />
            <NavbarMenuItem>
              <Link color="foreground" onClick={() => switchLocale('en-US')}>
                🇺🇸 English
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link color="foreground" onClick={() => switchLocale('de-DE')}>
                🇩🇪 Deutsch
              </Link>
            </NavbarMenuItem>
            <Divider orientation="horizontal" className="my-4" />
            <NavbarMenuItem className="flex justify-center">
              <ThemeSwitcher />
            </NavbarMenuItem>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default MyNextUINavbar;
