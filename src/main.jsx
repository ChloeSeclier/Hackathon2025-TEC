import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import './main.css';
import Error404 from './pages/error404';
import Home from './pages/Home';
import Lots from './pages/Lots';
import Jeu from './components/jeu';
import ReglesJeu from './pages/reglesJeu';
import Politique from './pages/politique';
import DetailPage from './pages/details';
import Mentions from './pages/mentions';
import Contact from './pages/contact';
import Reglement from './pages/reglement';

const router = createBrowserRouter(
  [
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
          path: '/reglement',
          element: <Reglement />,
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
        {
          path: '/mentions',
          element: <Mentions />,
        },
        {
          path: '/politique',
          element: <Politique />,
        },
        { path: '/detail/:id', element: <DetailPage /> },
        { path: '/detail/:score', element: <DetailPage /> },
        {
          path: '*',
          element: <Error404 />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
