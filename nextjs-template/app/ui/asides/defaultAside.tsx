// app/[locale]/ui/asides/defaultAside.tsx

import { useTranslations } from 'next-intl';

const DefaultAside = () => {
  const t = useTranslations('DefaultAside');

  return (
    <aside className="bg-gray-200 dark:bg-gray-700 p-4">
      <h3 className="text-lg font-bold">{t('asideTitle')}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {t('asideParagraph1')}
      </p>
    </aside>
  );
};

export default DefaultAside;
