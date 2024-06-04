/* eslint-disable react-refresh/only-export-components */
import withErrorBoundary from '../hocs/withErrorBoundary';
import { TimelineSingle } from './TimelineSingle';

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <section className="grid gap-6">
      {data.map((item, idx, arr) => (
        <TimelineSingle
          key={idx}
          heading={item.heading}
          text={item.text}
          gap={24}
          arrayLength={arr.length}
          index={idx}
        />
      ))}
    </section>
  );
};

export default withErrorBoundary(Timeline);
