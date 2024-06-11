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
        <ul className="flex flex-wrap gap-4 items-center mt-4">
          <li className="text-blue-500">{t('Colors.Blue')}</li>
          <li className="text-purple-500">{t('Colors.Purple')}</li>
          <li className="text-green-500">{t('Colors.Green')}</li>
          <li className="text-red-500">{t('Colors.Red')}</li>
          <li className="text-pink-500">{t('Colors.Pink')}</li>
          <li className="text-yellow-500">{t('Colors.Yellow')}</li>
          <li className="text-zinc-500">{t('Colors.Zinc')}</li>
          <li className="text-myteal-500">{t('Colors.MyTeal')}</li>
        </ul>
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
