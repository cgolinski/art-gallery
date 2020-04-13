import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const AppHeader = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-dark-gray white pa3">
      {pathname === '/' ? (
        <h1 className="tc">Gallery of Popular Artists</h1>
      ) : (
        <NavLink className="link white hover-moon-gray" to="/">
          <h1 className="tc">Gallery of Popular Artists</h1>
        </NavLink>
      )}
    </div>
  );
};
