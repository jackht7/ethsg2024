import Navbar from '@/app/components/Navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
};

export default DashboardLayout;
