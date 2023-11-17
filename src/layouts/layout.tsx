import { Container } from '@mui/material';
import React from 'react';
import { Header } from './header';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <Header />
      <Outlet />
    </Container>
  );
};
