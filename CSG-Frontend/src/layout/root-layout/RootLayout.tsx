import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';

export default function RootLayout() {
  return (
    <>
      <Navigation />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}