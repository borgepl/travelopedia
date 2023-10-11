import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/components/layout/Header';
import Footer from './app/components/layout/Footer';
import DestinationIndex from './app/components/DestinationIndex';
//import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
//import { destinationAPI } from './api/destinationAPI';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header/>
      <DestinationIndex/>
      <Footer/>
    </Provider>
  </React.StrictMode>
);

