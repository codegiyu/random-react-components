import { useRef, useLayoutEffect, useState, useMemo } from 'react';

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

  // The line is absolutely placed at the bottom of the circle.
  // Lineheight is the height of this TimelineSingle component plus the gap between the groups
  // minus half the height of the greyish circle. This half is subtacted so the line definitely
  // gets into the space for the next circle but not enough to come out at the other end
  const lineHeight = useMemo(
    () => compHeight + gap - circleWidth / 2,
    [circleWidth, compHeight, gap],
  );

  const handleResize = () => {
    const comp = compRef.current;

    if (comp) {
      setCompHeight(comp.getBoundingClientRect().height);
    }
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={compRef} className="grid grid-cols-[auto_1fr] gap-4">
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
