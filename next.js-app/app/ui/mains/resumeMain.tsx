// @/app/ui/mains/blogMain.tsx

import { useTranslations } from 'next-intl';
import ResumeAside from '@/app/ui/asides/resumeAside';
import ResumeTimelineSection from '@/app/ui/sections/resumeTimelineSection';

const ResumeMain = () => {
  const t = useTranslations('ResumeMain');

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="flex flex-col md:flex-row lg:container dark:text-gray-100">
        <main className="flex-grow md:w-3/4">
          <h1 className="text-3xl font-bold">{t('Title')}</h1>
          <p className="m-2">
            {t.rich('Paragraph1', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <ResumeTimelineSection />
        </main>
        <ResumeAside className="md:w-1/4 md:ml-4 mt-4 md:mt-0" />
      </div>
    </div>
  );
};

export default ResumeMain;
