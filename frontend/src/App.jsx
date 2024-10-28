import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <>
    <ErrorBoundary>
      <Header />
      <ToastContainer/>
      <Container className='my-2'>
        <Outlet />
      </Container>
      </ErrorBoundary>
    </>
  );
};

export default App;
