// @/app/ui/sections/myNextUIDemo.tsx

import React from 'react';
import { useTranslations } from 'next-intl';
import { Button, Image } from '@nextui-org/react';

const MyNextUIDemo = () => {
  const t = useTranslations('MyNextUIDemo');

  return (
    <section className="p-6 mt-4">
      <h3 className="text-2xl font-bold">{t('Title')}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{t('Paragraph')}</p>
      <article className="my-6">
        <h4 className="text-xl font-bold">{t('Colors.Title')}</h4>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {t('Colors.Paragraph')}
        </p>
        <div className="flex flex-wrap gap-4 items-center mt-4">
          <Button color="default">{t('Colors.Default')}</Button>
          <Button color="primary">{t('Colors.Primary')}</Button>
          <Button color="secondary">{t('Colors.Secondary')}</Button>
          <Button color="success">{t('Colors.Success')}</Button>
          <Button color="warning">{t('Colors.Warning')}</Button>
          <Button color="danger">{t('Colors.Danger')}</Button>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <p className="text-blue-500 mt-4">{t('Colors.Blue')}</p>
          <p className="text-purple-500 mt-4">{t('Colors.Purple')}</p>
          <p className="text-green-500 mt-4">{t('Colors.Green')}</p>
          <p className="text-red-500 mt-4">{t('Colors.Red')}</p>
          <p className="text-pink-500 mt-4">{t('Colors.Pink')}</p>
          <p className="text-yellow-500 mt-4">{t('Colors.Yellow')}</p>
          <p className="text-zinc-500 mt-4">{t('Colors.Zinc')}</p>
          <p className="text-myteal-500 mt-4">{t('Colors.MyTeal')}</p>
        </div>
      </article>
      <article className="my-6">
        <h4 className="text-xl font-bold">{t('Images.Title')}</h4>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {t('Images.Paragraph')}
        </p>
        <div className="flex flex-wrap gap-4 items-center mt-4">
          <Image
            isBlurred
            width={240}
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            alt="NextUI Album Cover"
            className="m-5"
          />
        </div>
      </article>
    </section>
  );
};

export default MyNextUIDemo;
