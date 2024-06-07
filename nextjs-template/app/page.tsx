// @/app/page.tsx

import DefaultHeader from '@/components/headers/defaultHeader';
import DefaultHomepage from '@/components/mains/defaultMain';
import DefaultFooter from '@/components/footers/defaultFooter';

export default function Home() {
  return (
    <>
      <DefaultHeader />
      <DefaultHomepage />
      <DefaultFooter />
    </>
  );
}
