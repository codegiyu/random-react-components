import { MainLayout } from '../layout/MainLayout';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <MainLayout>
      <section className="w-full container-128">
        <h1 className="font-poppins text-5xl my-10 font-medium text-center">
          Available Components
        </h1>
        <ol className="my-10 list-decimal text-3xl">
          <li>
            <Link to="/timeline-1" className="text-2xl">
              Timeline Component
            </Link>
          </li>
        </ol>
      </section>
    </MainLayout>
  );
};
