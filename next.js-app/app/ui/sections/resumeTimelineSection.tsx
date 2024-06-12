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
import image1 from '@/app/data/images/logo-best-solution.png';
import image2 from '@/app/data/images/logo-best-solution.png';
import image3 from '@/app/data/images/logo-best-solution.png';
import image4 from '@/app/data/images/logo-ebh.png';

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
    // Add more entries as needed
  ];

  return (
    <section className="mt-4">
      <h3 className="text-2xl font-bold">{t('Title')}</h3>
      <p className="mt-2">{t('Paragraph')}</p>
      <div className="timeline mt-6">
        {timelineEntries.map((entry, index) => (
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
