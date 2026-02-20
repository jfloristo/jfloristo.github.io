import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home.jsx';
import TheAsk from './pages/TheAsk.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YesNaYes from './pages/YesNaYes.jsx';
import LilSmth from './pages/LilSmth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theAsk" element={<TheAsk />} />
          <Route path="/YesNaYes" element={<YesNaYes />} />
          <Route path="/LilSmth" element={<LilSmth />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
