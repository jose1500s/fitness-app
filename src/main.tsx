import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Auth/Layout.tsx'
import Login from './components/Auth/Login.tsx'
import Register from './components/Auth/Register.tsx'
import Index from './components/Main/index.tsx'
import { Toaster } from 'sonner'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      }
    ]
  },
  {
    path: '/home',
    element: <Index />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster  richColors closeButton />
  </React.StrictMode>,
)
