// @/app/[locale]/page.tsx

import V1Header from '@/app/ui/headers/V1Header';
import V1Main from '@/app/ui/mains/V1Main';
interface HomeProps {
  params: { locale: string };
}

export default function Home({ params: { locale } }: HomeProps) {
  return (
    <>
      <V1Header />
      <V1Main />
    </>
  );
}
