import React from 'react';
import { Link } from '@reach/router';
const Header = () => {
  return (
    <header>
      <Link className="site_title" to="/">
        <h1>The NC News</h1>
      </Link>
      {/* <p>The best in coding news</p> */}
    </header>
  );
};

export default Header;
