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
}
