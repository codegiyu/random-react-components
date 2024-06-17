import React, { useState, useMemo, useEffect } from 'react';
import { AngleHighlightBox } from './AngleHighlightBox';
import { RatingStars } from './RatingStars';

export const Carousel: React.FC<Carousel1Props> = ({ data, startIndex = 0 }) => {
  const [currIndex, setCurrIndex] = useState<number>(startIndex);

  const CAROUSEL_SWAP_INTERVAL = 5000;

  const profilesArr = useMemo(() => {
    return [...data.slice(currIndex, data.length), ...data.slice(0, currIndex)];
  }, [data, currIndex]);

  useEffect(() => {
    const swapTimeout = setTimeout(() => {
      setCurrIndex(prevIndex => (prevIndex + 1 === data.length ? 0 : prevIndex + 1));
    }, CAROUSEL_SWAP_INTERVAL);

    return () => {
      clearTimeout(swapTimeout);
    };
  }, [currIndex, data.length]);

  return (
    <section className="w-full grid grid-cols-[2fr_6fr_2fr] lg:grid-cols-[5fr_10fr_5fr] font-poppins">
      <div className="h-full grid items-center">
        <img
          src={profilesArr[data.length - 1].img}
          alt={profilesArr[data.length - 1].name}
          className="w-1/2 aspect-square rounded-full object-cover object-top"
        />
      </div>

      <div className="w-full grid gap-3">
        <AngleHighlightBox widthClass="w-full" paddingClass="py-5 px-4 md:px-10">
          <div className="w-full grid justify-items-center gap-4">
            <img
              src={profilesArr[0].img}
              alt={profilesArr[0].name}
              className="w-[120px] aspect-square rounded-full object-cover object-top"
            />
            <h5 className="font-semibold text-xl text-center">{profilesArr[0].name}</h5>
            <p className="text-center text-black/60">{profilesArr[0].info}</p>
            <RatingStars rating={profilesArr[0].rating} />
          </div>
        </AngleHighlightBox>
        <div className="w-full flex items-center justify-center gap-1">
          {data.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrIndex(idx)}
              className={`${idx === currIndex ? 'bg-blue-600' : 'bg-slate-300'} w-2 h-2 rounded-full`}></span>
          ))}
        </div>
      </div>

      <div className="h-full grid items-center justify-items-end">
        <img
          src={profilesArr[1].img}
          alt={profilesArr[1].name}
          className="w-1/2 aspect-square rounded-full object-cover object-top"
        />
      </div>
    </section>
  );
};
