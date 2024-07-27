import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';
import AuthLayout from './components/AuthLayout';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Consultation from './pages/Consultation';
import NotFound from './pages/NotFound';
import './css/index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/consultation',
        element: <Consultation />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <SignUp />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);