import React from 'react';
import { Link } from 'react-router-dom';

export const ComponentDisplay: React.FC<ComponentDisplayProps> = ({
  img,
  alt,
  pageLink,
  name,
}) => {
  return (
    <li className="w-full sm:w-[300px] lg:w-[400px] shadow-sm">
      <figure className="bg-white w-full rounded-lg overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="w-full aspect-[1.25] object-cover object-left border border-slate-100 rounded-t-lg"
        />
        <figcaption className="w-full py-6 px-4">
          <Link to={pageLink} className="link text-lg lg:text-xl w-full">
            <p className="text-center">{name}</p>
          </Link>
        </figcaption>
      </figure>
    </li>
  );
};
