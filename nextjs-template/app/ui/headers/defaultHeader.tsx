// @/app/ui/headers/defaultHeader.tsx
import Link from 'next/link';
import LocaleSwitcher from '@/app/ui/components/localeSwitcher';
import { useTranslations } from 'next-intl';
import { ThemeSwitcher } from '@/app/ui/components/themeSwitcher';

const DefaultHeader = () => {
  const t = useTranslations('DefaultHeader');
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">{t('App.Title')}</div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:underline">
            {t('App.NavLink')} 1
          </Link>
          <Link href="#" className="hover:underline">
            {t('App.NavLink')} 2
          </Link>
        </div>
        <LocaleSwitcher />
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default DefaultHeader;
