import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className='navi'>
      <ul>
        <li>
          <Link to='/' title='홈으로'>Home</Link>
        </li>
        <li>
          <Link to='/api' title='API'>API</Link>
        </li>
        <li>
          <Link to='/contact' title='문의하기'>Contact us</Link>
        </li>
        <li>
          <Link to='/router' title='라우터'>Router</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;