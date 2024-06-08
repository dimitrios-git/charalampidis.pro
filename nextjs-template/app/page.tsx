// @/app/page.tsx

import NavbarControlledMenuHeader from '@/app/ui/headers/navbarControlledMenuHeader';
import DefaultMain from '@/app/ui/mains/defaultMain';
import DefaultFooter from '@/app/ui/footers/defaultFooter';

export default function Home() {
  return (
    <>
      <NavbarControlledMenuHeader />
      <DefaultMain />
      <DefaultFooter />
    </>
  );
}
