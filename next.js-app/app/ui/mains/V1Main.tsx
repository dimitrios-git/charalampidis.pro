import { useTranslations } from 'next-intl';

const V1Main = () => {
  const t = useTranslations('V1Main');

  return (
    <div className="flex items-center justify-center min-h-screen max-w-screen-lg mx-auto p-4">
      <div className="text-center dark:text-gray-100">
        <main className="flex-grow">
          <h1 className="text-3xl font-bold">{t('Title')}</h1>
          <p className="m-2">
            {t.rich('Paragraph1', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </main>
      </div>
    </div>
  );
};

export default V1Main;
