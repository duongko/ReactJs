import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './coponent/admin/Admin.scss';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import { ToastContainer, toast } from 'react-toastify';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { detectOverflow } from '@popperjs/core'
import { PersistGate } from 'redux-persist/integration/react'
import "nprogress/nprogress.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <BrowserRouter>
          <Layout />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
        </BrowserRouter>
      </PersistGate>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
