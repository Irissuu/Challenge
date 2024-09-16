
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './routes/Home/index.tsx';
import Equipe from './routes/Equipe/index.tsx';
import Auth from './routes/Auth/index.tsx';
import ReVeiculo from './routes/ReVeiculo/index.tsx';
import Error from './routes/Error/index.tsx';

const router = createBrowserRouter([
  {path:'/', element: <App />, errorElement:<Error />, children:[
      { path:'/', element:<Auth />},
      { path:'/home', element:<Home />},
      { path:'/equipe', element:<Equipe />},
      { path:'/registrarveiculo', element:<ReVeiculo />},
      //{ path:'*', element:<ErrorPage />},
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

