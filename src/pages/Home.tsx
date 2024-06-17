import { ComponentDisplay } from '../components/ComponentDisplay';
import { allComponentsDisplayData } from '../constants/allComponentsDisplayData';
import { MainLayout } from '../layout/MainLayout';

export const Home = () => {
  return (
    <MainLayout>
      <section className="w-full container-128 py-10">
        <h1 className="font-poppins text-2xl lg:text-5xl mb-10 font-semibold lg:font-medium text-center">
          Available Components
        </h1>
        <ul className="my-10 list-none flex flex-wrap items-center justify-start gap-10">
          {allComponentsDisplayData.map((item, idx) => (
            <ComponentDisplay
              key={idx}
              img={item.img}
              alt={item.alt}
              pageLink={item.pageLink}
              name={item.name}
            />
          ))}
        </ul>
      </section>
    </MainLayout>
  );
};
