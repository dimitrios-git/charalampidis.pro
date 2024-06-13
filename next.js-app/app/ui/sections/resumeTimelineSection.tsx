// @/app/ui/sections/resumeTimelineSection.tsx

import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';

// Import images statically
import image1 from '@/app/data/images/logo-university-of-national-and-world-economy.webp';
import image2 from '@/app/data/images/logo-piraeus-bank.webp';
import image3 from '@/app/data/images/logo-piraeus-bank.webp';
import image4 from '@/app/data/images/logo-piraeus-bank.webp';
import image5 from '@/app/data/images/logo-university-of-national-and-world-economy.webp';
import image6 from '@/app/data/images/logo-hellenic-army.webp';
import image7 from '@/app/data/images/logo-snail-trading.png';
import image8 from '@/app/data/images/logo-european-brokerage-house.svg';
import image9 from '@/app/data/images/logo-financial-supervision-commision.webp';
import image10 from '@/app/data/images/logo-corporate-finance-institute.webp';
import image11 from '@/app/data/images/logo-best-solution.png';
import image12 from '@/app/data/images/logo-42heilbronn.svg';
import image13 from '@/app/data/images/logo-jcbachmann.svg';

const ResumeTimelineSection = () => {
  const t = useTranslations('ResumeTimelineSection');

  // Template data for timeline entries with imported images
  const timelineEntries = [
    {
      title: t('Entry1.Title'),
      period: t('Entry1.Period'),
      description: t('Entry1.Description'),
      image: image1.src,
    },
    {
      title: t('Entry2.Title'),
      period: t('Entry2.Period'),
      description: t('Entry2.Description'),
      image: image2.src,
    },
    {
      title: t('Entry3.Title'),
      period: t('Entry3.Period'),
      description: t('Entry3.Description'),
      image: image3.src,
    },
    {
      title: t('Entry4.Title'),
      period: t('Entry4.Period'),
      description: t('Entry4.Description'),
      image: image4.src,
    },
    {
      title: t('Entry5.Title'),
      period: t('Entry5.Period'),
      description: t('Entry5.Description'),
      image: image5.src,
    },
    {
      title: t('Entry6.Title'),
      period: t('Entry6.Period'),
      description: t('Entry6.Description'),
      image: image6.src,
    },
    {
      title: t('Entry7.Title'),
      period: t('Entry7.Period'),
      description: t('Entry7.Description'),
      image: image7.src,
    },
    {
      title: t('Entry8.Title'),
      period: t('Entry8.Period'),
      description: t('Entry8.Description'),
      image: image8.src,
    },
    {
      title: t('Entry9.Title'),
      period: t('Entry9.Period'),
      description: t('Entry9.Description'),
      image: image9.src,
    },
    {
      title: t('Entry10.Title'),
      period: t('Entry10.Period'),
      description: t('Entry10.Description'),
      image: image10.src,
    },
    {
      title: t('Entry11.Title'),
      period: t('Entry11.Period'),
      description: t('Entry11.Description'),
      image: image11.src,
    },
    {
      title: t('Entry12.Title'),
      period: t('Entry12.Period'),
      description: t('Entry12.Description'),
      image: image12.src,
    },
    {
      title: t('Entry13.Title'),
      period: t('Entry13.Period'),
      description: t('Entry13.Description'),
      image: image13.src,
    },
    // Add more entries as needed
  ];

  // Reverse the order of the timeline entries
  const reversedTimelineEntries = [...timelineEntries].reverse();

  return (
    <section className="mt-4">
      <h3 className="text-2xl font-bold">{t('Title')}</h3>
      <p className="mt-2">{t('Paragraph')}</p>
      <div className="timeline mt-6">
        {reversedTimelineEntries.map((entry, index) => (
          <div key={index} className="timeline-entry mb-4">
            <Card>
              <CardHeader className="flex gap-3">
                <Image
                  as={NextImage}
                  alt={entry.title}
                  height={40}
                  radius="sm"
                  src={entry.image}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{entry.title}</p>
                  <p className="text-small text-default-500">{entry.period}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{entry.description}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeTimelineSection;
