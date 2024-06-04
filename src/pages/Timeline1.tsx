import Timeline from '../components/Timeline';
import { timelineData_1 } from '../constants/timelineData';
import { MainLayout } from '../layout/MainLayout';

export const Timeline1 = () => {
  return (
    <MainLayout>
      <section className="w-full h-full grid place-items-center">
        <div className="w-full lg:w-[500px]">
          <Timeline data={timelineData_1} />
        </div>
      </section>
    </MainLayout>
  );
};
