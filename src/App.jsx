import { Outlet } from 'react-router-dom';
import { ScaleProvider } from './components/scaleContext';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <ScaleProvider>
          <Outlet />
        </ScaleProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
