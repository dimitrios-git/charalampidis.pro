// app/[locale]/ui/mains/defaultMain.tsx
import DefaultSection from '@/app/ui/sections/defaultSection';
import { ThemeSwitcher } from '@/app/ui/components/themeSwitcher';
import { useTranslations } from 'next-intl';

const DefaultMain = () => {
  const t = useTranslations('DefaultMain');

  return (
    <main className="container mx-auto p-4 bg-white dark:bg-gray-900 dark:text-gray-100">
      <DefaultSection />
      <article className="my-6">
        <h2 className="text-2xl font-bold">{t('articleTitle')}</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {t('articleParagraph1')}
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {t('articleParagraph2')}
        </p>
      </article>
      <ThemeSwitcher />
    </main>
  );
};

export default DefaultMain;
