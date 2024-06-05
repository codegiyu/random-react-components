import { useRef, useEffect, useState, useMemo } from 'react';

export const TimelineSingle: React.FC<TimelineSingleProps> = ({
  heading,
  text,
  gap,
  arrayLength,
  index,
}) => {
  const [compHeight, setCompHeight] = useState<number>(0);
  const compRef = useRef<HTMLDivElement>(null);

  // Width of the greyish circle surrounding the blue dot
  const circleWidth = useMemo(() => 22, []);

  // gap property is applied as margin bottom for singles that have another one below them
  const marginBottom = useMemo(
    () => (index < arrayLength - 1 ? gap : 0),
    [index, arrayLength, gap],
  );

  // The line is absolutely placed at the bottom of the circle.

  // Lineheight is the height of this TimelineSingle component plus the gap between the groups
  // minus half the height of the greyish circle. This half is subtacted so the line definitely
  // gets into the space for the next circle but not enough to come out at the other end

  // If compHeight is zero, without the ternery below, lineHeight will be some small value
  // that just looks weird, so the ternary makes it all or nothing.

  const lineHeight = useMemo(
    () => (compHeight ? compHeight + gap - circleWidth / 2 : 0),
    [circleWidth, compHeight, gap],
  );

  const handleResize = () => {
    const comp = compRef.current;

    if (comp && document.readyState === 'complete') {
      setCompHeight(comp.getBoundingClientRect().height);
    }
  };

  useEffect(() => {
    // Call resize function when component is done loading
    handleResize();

    // There is usually a layout shift right after the component loads due to css properly taking effect
    // This setTimeout accounts for that....hopefully
    setTimeout(() => handleResize(), 1000);

    // In the case of the page being reloaded or freshly loaded, this event will be fired.
    // The handleResize function call and setTimeout above are only simulating the effects of this listener
    // for pages navigated to by react-router since this event will not be fired then.
    document.addEventListener('readystatechange', handleResize);

    // If the window is resized, call resize function again
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('readystatechange', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={compRef}
      className="grid grid-cols-[auto_1fr] gap-4"
      style={{ marginBottom }}>
      <div
        className="relative grid place-items-center rounded-full aspect-square bg-blue-950/30 z-[1]"
        style={{ width: `${circleWidth}px` }}>
        <span className="rounded-full aspect-square w-[18px] bg-blue-950 relative z-[1]"></span>
        {index < arrayLength - 1 ? (
          <div
            className="w-0 border-l-2 border-red-400 border-dashed absolute top-full left-1/2 -translate-x-1/2 z-[0]"
            style={{ height: lineHeight }}></div>
        ) : null}
      </div>

      <div className="grid gap-1 text-base font-poppins">
        <h5 className="font-medium text-blue-800">{heading}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};
