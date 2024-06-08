// @/app/ui/mains/defaultMain.tsx

import React from 'react';
import { ThemeSwitcher } from '@/app/[locale]/ui/themeSwitcher';
import ExampleAdvertisementAside from '@/app/[locale]/ui/asides/exampleAdvertisementAside';
import { useTranslations } from 'next-intl';

const DefaultMain = () => {
  const t = useTranslations('DefaultMain.Hero');

  return (
    <main className="p-6">
      <div className="w-3/4 mx-auto py-32 text-center">
        <h1 className="text-6xl font-bold">{t('Title')}</h1>
        <p className="pt-8 text-xl">{t('Subtitle')}</p>
        <a
          href="/about"
          className="px-4 py-4 mt-6 bg-blue-500 text-white rounded inline-block"
        >
          {t('CallToAction')}
        </a>
      </div>
      <article className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Web App</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Nullam ac erat ante. Ut nec risus nec urna mollis egestas.
          Fusce tincidunt, nisl eget venenatis dictum, metus purus malesuada
          erat, ut semper sapien elit non ante.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
        <p className="mb-4">
          Integer auctor, lacus sed bibendum auctor, augue arcu consectetur
          libero, vel euismod turpis quam eu augue. Aenean dapibus, turpis in
          fermentum luctus, eros libero venenatis est, in vehicula felis elit a
          ligula. Suspendisse potenti. Vivamus sed urna at justo congue
          bibendum.
        </p>
      </article>
      <ExampleAdvertisementAside />
      <ThemeSwitcher />
    </main>
  );
};

export default DefaultMain;
