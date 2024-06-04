import { MainLayout } from '../layout/MainLayout';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <MainLayout>
      <section className="w-full container-128 py-10">
        <h1 className="font-poppins text-2xl lg:text-5xl mb-10 font-semibold lg:font-medium text-center">
          Available Components
        </h1>
        <ol className="my-10 list-none">
          <li>
            <Link to="/timeline-1" className="text-xl lg:text-2xl">
              Timeline Component
            </Link>
          </li>
        </ol>
      </section>
    </MainLayout>
  );
};
