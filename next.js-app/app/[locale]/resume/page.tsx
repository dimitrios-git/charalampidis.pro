// @/app/[locale]/resume/page.tsx

import React from 'react';
import MyNextUIHeader from '@/app/ui/headers/myNextUIHeader';
import ResumeMain from '@/app/ui/mains/resumeMain';
import MyNextUIFooter from '@/app/ui/footers/myNextUIFooter';

interface ResumeProps {
  params: { locale: string };
}

const Resume = ({ params: { locale } }: ResumeProps) => {
  return (
    <>
      <MyNextUIHeader />
      <ResumeMain />
      <MyNextUIFooter />
    </>
  );
};

export default Resume;
