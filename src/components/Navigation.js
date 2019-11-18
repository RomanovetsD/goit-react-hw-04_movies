import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => (
  <ul className="list">
    <li className="navlist">
      <NavLink
        exact
        to={routes.HOME}
        className="navlink"
        style={{ color: 'black' }}
        activeStyle={{ color: 'red' }}
      >
        Home
      </NavLink>
    </li>
    <li className="navlist">
      <NavLink
        to={routes.MOVIES}
        className="navlink"
        style={{ color: 'black' }}
        activeStyle={{ color: 'red' }}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
