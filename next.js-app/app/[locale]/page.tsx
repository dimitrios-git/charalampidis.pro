// @/app/[locale]/page.tsx

import MyNextUIHeader from '@/app/ui/headers/myNextUIHeader';
import DefaultMain from '@/app/ui/mains/defaultMain';
import DefaultFooter from '@/app/ui/footers/defaultFooter';
import DefaultAside from '@/app/ui/asides/defaultAside';

interface HomeProps {
  params: { locale: string };
}

export default function Home({ params: { locale } }: HomeProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <MyNextUIHeader />
      <div className="flex flex-1 flex-col md:flex-row">
        <DefaultMain />
        <DefaultAside className="md:w-1/4" />
      </div>
      <DefaultFooter />
    </div>
  );
}
