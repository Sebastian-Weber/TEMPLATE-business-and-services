// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import Home from './pages/Home';
import About from './pages/About';
import ElektroDienstleistungenPrivatkunden from './pages/Elektro-Dienstleistungen-Privatkunden';




const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/Home',
                element: <Home />,
            },
            {
              path: '/About',
              element: <About />,
            },
            {
                path: '/Elektro-Dienstleistungen-Privatkunden',
                element: <ElektroDienstleistungenPrivatkunden />,
            },

        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);