// @/app/page.tsx

import DefaultHeader from '@/components/headers/defaultHeader';
import DefaultMain from '@/components/mains/defaultMain';
import DefaultFooter from '@/components/footers/defaultFooter';

export default function Home() {
  return (
    <>
      <DefaultHeader />
      <DefaultMain />
      <DefaultFooter />
    </>
  );
}
