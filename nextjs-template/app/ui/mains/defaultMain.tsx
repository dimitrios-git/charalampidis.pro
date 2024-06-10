// @/app/ui/mains/defaultMain.tsx

import DefaultSection from '@/app/ui/sections/defaultSection';
import { useTranslations } from 'next-intl';

const DefaultMain = () => {
  const t = useTranslations('DefaultMain');

  return (
    <main className="container mx-auto p-4 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold">{t('mainTitle')}</h2>
      <p className="m-2 text-gray-700 dark:text-gray-300">
        {t('mainParagraph1')}
      </p>
      <p className="m-2 text-gray-700 dark:text-gray-300">
        {t('mainParagraph2')}
      </p>
      <DefaultSection />
    </main>
  );
};

export default DefaultMain;
