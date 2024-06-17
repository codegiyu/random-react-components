import React, { useMemo } from 'react';
import { TiStar, TiStarHalf, TiStarOutline } from 'react-icons/ti';
import { getStarArr } from '../utils';

export const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const starArr = useMemo(() => getStarArr(rating), [rating]);

  return (
    <div className="w-fit flex gap-0 flex-none text-2xl leading-6 text-yellow-500">
      {starArr.map((num, idx) => {
        if (num === 1) {
          return <TiStar key={idx} />;
        } else if (num === 0.5) {
          return <TiStarHalf key={idx} />;
        } else {
          return <TiStarOutline key={idx} />;
        }
      })}
    </div>
  );
};
