import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Animes from './pages/Animes';
import Mangas from './pages/Mangas';
import GenerosAnime from './components/GenerosAnime';
import AnimesList from './components/AnimesList';
import GenerosMangas from './components/GenerosMangas';
import MangasList from './components/MangasList';
import PageDetail from './components/PageDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "animes",
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
      path:"anime/:animeId",
      element: <PageDetail/> 
  },
  {
    path: "mangas",
    element: <Mangas/>,
    children: [
      {
        path: "",
        element: <GenerosMangas/>
      },
      {
        path: "generos/:generoId",
        element: <MangasList/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
