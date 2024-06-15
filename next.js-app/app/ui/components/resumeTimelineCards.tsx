// @/app/ui/components/resumeTimelineCards.tsx

'use client';

import React, { useState, ChangeEvent } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  RadioGroup,
  Radio,
} from '@nextui-org/react';
import NextImage from 'next/image';

export interface ResumeTimelineCardsProps {
  timelineEntries: {
    title: string;
    institution: string;
    period: string;
    description: string;
    image: any;
  }[];
  radioLabels: {
    label: string;
    now: string;
    beginning: string;
  };
}

const ResumeTimelineCards = ({
  timelineEntries,
  radioLabels,
}: ResumeTimelineCardsProps) => {
  const [timelineOrder, setTimelineOrder] = useState('now');

  const displayedTimelineEntries =
    timelineOrder === 'now' ? [...timelineEntries].reverse() : timelineEntries;

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTimelineOrder(event.target.value);
  };

  return (
    <>
      <RadioGroup
        label={radioLabels.label}
        orientation="horizontal"
        value={timelineOrder}
        onChange={handleRadioChange}
      >
        <Radio value="now">{radioLabels.now}</Radio>
        <Radio value="beginning">{radioLabels.beginning}</Radio>
      </RadioGroup>
      <div className="timeline mt-6">
        {displayedTimelineEntries.map((entry, index) => (
          <div key={index} className="timeline-entry mb-4">
            <Card className="w-full">
              <CardHeader className="flex gap-3">
                <Image
                  as={NextImage}
                  alt={entry.title}
                  height={60}
                  radius="sm"
                  src={entry.image}
                  width={60}
                />
                <div className="flex flex-col">
                  <p className="text-md">{entry.title}</p>
                  <p className="text-md">{entry.institution}</p>
                  <p className="text-small text-default-500">{entry.period}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{entry.description}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResumeTimelineCards;
