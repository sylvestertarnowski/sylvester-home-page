import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { routes } from '../../App';

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="Navbar-nav">
        <ul className="Navbar-ul">
          {routes.map((route) => (
            <li>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
