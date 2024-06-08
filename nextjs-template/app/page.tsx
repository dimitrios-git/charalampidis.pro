// @/app/page.tsx

import NavbarCustomizingTheActiveItemHeader from '@/app/ui/headers/navbarCustomizingTheActiveItemHeader';
import DefaultMain from '@/app/ui/mains/defaultMain';
import DefaultFooter from '@/app/ui/footers/defaultFooter';

export default function Home() {
  return (
    <>
      <NavbarCustomizingTheActiveItemHeader />
      <DefaultMain />
      <DefaultFooter />
    </>
  );
}
