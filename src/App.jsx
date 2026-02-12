import React, { useState, useEffect } from 'react';

import './scss/styles.scss';

import Name from './homepage/Name';
import Bio from './homepage/MainMessage';
import ClickHere from './homepage/ClickHere';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <div className="container middle center">
        <Name isVisible={isVisible} />
        <div className="container">
          <Bio isVisible={isVisible} />
          <ClickHere isVisible={isVisible} />
        </div>
      </div>
    </main>
  );
}

export default App;
