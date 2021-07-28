import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to={'/About'}>About</Link>
    </div>
  );
};

export default Header;
