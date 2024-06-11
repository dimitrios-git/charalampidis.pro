// @/app/ui/mains/blogMain.tsx

import { useTranslations } from 'next-intl';

const ResumeMain = () => {
  const t = useTranslations('ResumeMain');

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="flex flex-col md:flex-row lg:container dark:text-gray-100">
        <main className="flex-grow md:w-3/4">
          <h2 className="text-3xl font-bold">{t('Title')}</h2>
          <p className="m-2">{t('Paragraph1')}</p>
        </main>
      </div>
    </div>
  );
};

export default ResumeMain;
