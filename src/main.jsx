import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import './main.css';
import Error404 from './pages/error404';
import Home from './pages/Home';
import Lots from './pages/Lots';
import Jeu from './components/jeu';
import ReglesJeu from './components/reglesJeu';
import Contact from './pages/contact';
import DetailPage from './pages/details';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/regles-jeu',
        element: <ReglesJeu />,
      },
      {
        path: '/jeu',
        element: <Jeu />,
      },
      {
        path: '/lots',
        element: <Lots />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      { path: '/detail/:id', element: <DetailPage /> }, // Route pour afficher un détail
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
