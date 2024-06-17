import React from 'react';
import { useTranslations } from 'next-intl';
import V1Navbar from '../components/V1Navbar';

const V1Header = () => {
  const t = useTranslations('V1Header');

  const v1HeaderTranslations = {
    brand: t('Navbar.Brand'),
    languageMenu: t('Navbar.LanguageMenu'),
  };

  return <V1Navbar translations={v1HeaderTranslations} />;
};

export default V1Header;
