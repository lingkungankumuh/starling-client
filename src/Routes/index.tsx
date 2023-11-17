import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '../layouts/layout';
import { Login } from '../pages/auth/login';
import Home from '../pages/home/home';
import { Register } from '../pages/auth/register';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>,
  ),
);
