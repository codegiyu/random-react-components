import { MainLayout } from '../layout/MainLayout';
import { Carousel } from '../components/Carousel';
import { carouselData } from '../constants/carouselData';

export const Carousel1 = () => {
  return (
    <MainLayout>
      <section className="w-full h-full container-128 py-10 grid place-items-center">
        <div className="w-full">
          <Carousel data={carouselData} />
        </div>
      </section>
    </MainLayout>
  );
};
