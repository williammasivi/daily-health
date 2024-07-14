import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayoutRoute from './routes/LayoutRoute';
import Consultation from './pages/Consultation';
import Pharmacies from './pages/Pharmacies';
import Home from './pages/Home';
import Medication from './pages/Medication';
import Records from './pages/Records';
import './css/index.css';
import Apropos from './pages/Apropos';
import Service from './pages/services';
import Blog from './pages/Blog';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoute />,
    children: [
      { path: '', element: <Home /> },
      { path: 'consultation', element: <Consultation /> },
      { path: 'medication', element: <Medication /> },
      { path: 'pharmacies', element: <Pharmacies /> },
      { path: 'records', element: <Records /> },
      { path: '/about', element: <Apropos />},
      { path: '/services', element: <Service />},
      { path: '/blog', element: <Blog />}
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);