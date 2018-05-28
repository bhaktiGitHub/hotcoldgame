import React from 'react';

import TopNav from './Topnav.js';

import './Header.css';

export default function Header(props) {
  return (
    <header>
      <TopNav
        onRestartGame={() => props.onRestartGame()}
      />
      
    </header>
  );
}
