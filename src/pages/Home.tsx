import { MainLayout } from '../layout/MainLayout';
import { Link } from 'react-router-dom';
import timeline1 from '../assets/images/timeline-1.png';

export const Home = () => {
  return (
    <MainLayout>
      <section className="w-full container-128 py-10">
        <h1 className="font-poppins text-2xl lg:text-5xl mb-10 font-semibold lg:font-medium text-center">
          Available Components
        </h1>
        <ol className="my-10 list-none flex flex-wrap items-center justify-start gap-10">
          <li className="w-full sm:w-[300px] lg:w-[400px] shadow-sm">
            <figure className="bg-white w-full rounded-lg overflow-hidden">
              <img
                src={timeline1}
                alt="Timeline 1"
                className="w-full aspect-[1.25] object-cover object-left border border-slate-100 rounded-t-lg"
              />
              <figcaption className="w-full py-6 px-4">
                <Link to="/timeline-1" className="link text-lg lg:text-xl w-full">
                  <p className="text-center">Timeline Component</p>
                </Link>
              </figcaption>
            </figure>
          </li>
        </ol>
      </section>
    </MainLayout>
  );
};
