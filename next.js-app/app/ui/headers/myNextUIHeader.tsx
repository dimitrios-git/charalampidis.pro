// @/app/ui/headers/myNextUIHeader.tsx

import React from 'react';
import { useTranslations } from 'next-intl';
import MyNextUINavbar from '@/app/ui/components/myNextUINavbar';

const MyNextUIHeader = () => {
  const t = useTranslations('MyNextUIHeader');

  const navbarTranslations = {
    brand: t('Navbar.Brand'),
    navLink1: t('Navbar.NavLink1'),
    navLink2: t('Navbar.NavLink2'),
    languageMenu: t('Navbar.LanguageMenu'),
  };

  return (
    <header className="sticky top-0 z-50">
      <MyNextUINavbar translations={navbarTranslations} />
    </header>
  );
};

export default MyNextUIHeader;
