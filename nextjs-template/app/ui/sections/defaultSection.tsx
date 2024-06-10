// app/[locale]/ui/sections/defaultSection.tsx

import React from 'react';
import { useTranslations } from 'next-intl';

const DefaultSection = () => {
  const t = useTranslations('DefaultSection');
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md">
      <h1 className="text-xl font-bold">{t('sectionTitle')}</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {t('sectionParagraph1')}
      </p>
    </section>
  );
};

export default DefaultSection;
