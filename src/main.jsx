import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import TheAsk from './valentine/TheAsk.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YesNaYes from './valentine/YesNaYes.jsx';
import Lilsmth from './letter/ltr.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/theAsk" element={<TheAsk />} />
          <Route path="/YesNaYes" element={<YesNaYes />} />
          <Route path="/LilSmth" element={<Lilsmth />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
