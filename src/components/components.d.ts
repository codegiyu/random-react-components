import { HTMLAttributes } from 'react';

export {};

declare global {
  interface TimelineDataSingle {
    heading: string;
    text: string;
  }

  interface TimelineSingleProps extends TimelineDataSingle {
    gap: number;
    arrayLength: number;
    index: number;
  }

  interface TimelineProps {
    data: TimelineDataSingle[];
  }

  interface ComponentDisplayProps {
    img: string;
    alt: string;
    pageLink: string;
    name: string;
  }

  interface AngleHighlightBoxProps extends HTMLAttributes<HTMLDivElement> {
    widthClass?: string;
    borderRadiusClass?: string;
    paddingClass?: string;
    children: React.ReactNode;
  }

  interface Carousel1Data {
    img: string;
    name: string;
    info: string;
    rating: number;
  }

  interface Carousel1Props {
    data: Carousel1Data[];
    startIndex?: number;
  }
}
