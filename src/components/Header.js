import React from 'react';
import { Link} from 'react-router-dom';
import '../App.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <h1>
        <Link to='/' title='홈'>
          <img src={`${process.env.PUBLIC_URL}/images/logo-YTS.svg`} alt="yts영화사이트" />
        </Link>
      </h1>

      <Navigation />
    </header>
  );
}

export default Header;
