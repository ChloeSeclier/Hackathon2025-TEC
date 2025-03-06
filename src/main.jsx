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
import Politique from './pages/politique';
import DetailPage from './pages/details';
import Mentions from './pages/mentions';
import Contact from './pages/contact';

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
      {
        path: '/mentions',
        element: <Mentions />,
      },
      {
        path: '/politique',
        element: <Politique />,
      },
      { path: '/detail/:id', element: <DetailPage /> },
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
