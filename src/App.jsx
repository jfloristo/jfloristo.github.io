import React, { useState, useEffect } from 'react'

import './scss/styles.scss'

import Name from './homepage/Name'
import Bio from './homepage/Bio';
import MainLink from './homepage/MainLink';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <nav className="navbar bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>
      <div className='container middle center'>
        <Name isVisible={isVisible} />
        <div className='container'>
          <Bio isVisible={isVisible} />
          <MainLink isVisible={isVisible} />
        </div>
      </div>
    </main>
  )
}

export default App
