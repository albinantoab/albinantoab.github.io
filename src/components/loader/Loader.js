import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

import './Loader.css';

function Loader() {
  return(
    <div className="loader-container">
      <Spinner animation="grow" />
    </div>
  );
}

export default Loader
