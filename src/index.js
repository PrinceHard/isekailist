import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Animes from './pages/Animes';
import GenerosAnime from './components/GenerosAnime';
import AnimesList from './components/AnimesList';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/animes",
    element: <Animes/>,
    children: [
      {
        path: "",
        element: <GenerosAnime/>
      },
      {
        path: "generos/:generoId",
        element: <AnimesList/>,
      },
    ]
  },
  {
    
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
