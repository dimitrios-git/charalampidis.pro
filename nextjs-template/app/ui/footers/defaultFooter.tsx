// app/[locale]/ui/footers/defaultFooter.tsx

import { useTranslations } from 'next-intl';

const DefaultFooter = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('DefaultFooter');

  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>
        &copy; {currentYear} {t('copyrightName')}. {t('allRightsReserved')}.
      </p>
    </footer>
  );
};

export default DefaultFooter;
