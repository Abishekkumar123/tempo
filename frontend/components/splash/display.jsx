import React from 'react';
import { Link } from 'react-router';

const SplashDisplay = () => (
  <div className='splash-display'>
    <div className='jumbotron'>
      <h1 className='splash-header'>Find your sound.</h1>
      <div className='splash-buttons'>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  </div>
);

export default SplashDisplay;