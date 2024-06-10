// app/[locale]/ui/sections/defaultSection.tsx

import React from 'react';
import { useTranslations } from 'next-intl';

const DefaultSection = () => {
  const t = useTranslations('DefaultSection');
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md">
      <h3 className="text-2xl font-bold">{t('sectionTitle')}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {t('sectionParagraph1')}
      </p>
      <article className="my-6">
        <h4 className="text-xl font-bold">{t('articleTitle')}</h4>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {t('articleParagraph1')}
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {t('articleParagraph2')}
        </p>
      </article>
    </section>
  );
};

export default DefaultSection;
