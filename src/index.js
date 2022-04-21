import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import './index.css';
import App from './App';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import News from './pages/News';
import Services from './pages/Services';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/jobs' element={<Jobs />} />
        <Route exact path='/about' element={<AboutUs />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals