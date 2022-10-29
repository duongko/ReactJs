import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './coponent/admin/Admin.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import User from './coponent/user/User';
import Admin from './coponent/admin/Admin';
import Home from './coponent/home/Home';
import Dashboard from './coponent/admin/content/Dashboard';
import MansUser from './coponent/admin/content/MansUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route
            path="users"
            element={<User />}
          />

          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<Admin />} >
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="MansUser" element={<MansUser />} />
          <Route index element={<Dashboard />} />



        </Route>


      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
