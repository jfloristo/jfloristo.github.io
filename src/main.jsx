import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reachout from './Reachout.jsx';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/new" element={<Reachout />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
)
