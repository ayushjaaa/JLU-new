import { Outlet } from 'react-router-dom';
import Footer from '../sections/Footer/Footer';

function MainLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
