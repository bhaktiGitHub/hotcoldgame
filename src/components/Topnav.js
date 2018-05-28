import React from 'react';

import './Topnav.css';

export default function Topnav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what" 
            className="what"
            aria-label="How to play"
          >
            What?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.onRestartGame()}
          >
             New Game
          </a>
        </li>
        
      </ul>
    </nav>
  );
}






