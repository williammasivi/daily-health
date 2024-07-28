import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';
import AuthLayout from './components/AuthLayout';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Consultation from './pages/Consultation';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PharmacyLocator from './pages/PharmacyLocator';
import './css/index.css';
import MedicationReminder from './pages/MedicationReminder';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/pharmacylocator',
        element: <PharmacyLocator />
      },
      {
        path: '/medicationreminder',
        element: <MedicationReminder />
      },
      {
        path: 'consultation',
        element: <Consultation />
      },
      {
        path: 'contacts',
        element: <Contact />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <SignUp />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);