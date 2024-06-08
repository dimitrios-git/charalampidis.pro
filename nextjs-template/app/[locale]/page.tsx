// @/app/[locale]/page.tsx

import NavbarCustomizingTheActiveItemHeader from '@/app/[locale]/ui/headers/navbarCustomizingTheActiveItemHeader';
import DefaultMain from '@/app/[locale]/ui/mains/defaultMain';
import DefaultFooter from '@/app/[locale]/ui/footers/defaultFooter';

interface HomeProps {
  params: { locale: string };
}

export default function Home({ params: { locale } }: HomeProps) {
  return (
    <>
      <NavbarCustomizingTheActiveItemHeader />
      <DefaultMain />
      <DefaultFooter />
    </>
  );
}
