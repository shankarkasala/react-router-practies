import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  const user="john"

  return (
    <div>
      <nav>
        <Link to="/">Profile</Link>
        <Link to={`/dashboard/${user}`}>Dashboard</Link>
        <Link to={`/about?name=${user}&age=${25}`}>About</Link>
      </nav>
    </div>
  );
};
export default Nav;
