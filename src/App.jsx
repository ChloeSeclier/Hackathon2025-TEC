import { Outlet } from 'react-router-dom';
import { ScaleProvider } from './components/scaleContext';
import Footer from './components/footer';
import Header from './components/header';
import './App.css';

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
