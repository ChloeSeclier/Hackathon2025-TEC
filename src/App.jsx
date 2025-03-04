import { Outlet } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';

function App() {
  // const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
