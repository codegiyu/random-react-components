import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="w-full py-4 lg:py-8 container-128 bg-darkBg">
      <Link to="/">
        <p className="text-white text-3xl font-semibold font-lobster leading-[100%]">
          <span className="text-5xl">C</span>
          ode
          <span className="text-rouge">giyu</span>
        </p>
      </Link>
    </header>
  );
};
