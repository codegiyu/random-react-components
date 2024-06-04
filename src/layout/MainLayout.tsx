import { Footer } from './Footer';
import { Header } from './Header';

export const MainLayout: React.FC<ChildrenOnly> = ({ children }) => {
  return (
    <div className="w-full min-h-screen grid grid-rows-[auto_1fr_auto] bg-slate-100">
      <Header />
      <main className="h-full w-full">{children}</main>
      <Footer />
    </div>
  );
};
