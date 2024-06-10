// @/app/ui/asides/myNextUIAside.tsx

import { useTranslations } from 'next-intl';
import React from 'react';

interface MyNextUIAsideProps {
  className?: string;
}

const MyNextUIAside: React.FC<MyNextUIAsideProps> = ({ className }) => {
  const t = useTranslations('MyNextUIAside');

  return (
    <aside className={`bg-gray-200 dark:bg-gray-700 p-4 rounded ${className}`}>
      <h3 className="text-lg font-bold">{t('Title')}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{t('Paragraph')}</p>
    </aside>
  );
};

export default MyNextUIAside;
