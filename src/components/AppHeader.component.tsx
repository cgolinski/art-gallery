import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => <h1 className="tc">Gallery of Popular Artists</h1>;

export const AppHeader = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-dark-gray white pa3">
      {pathname === '/' ? (
        <Header />
      ) : (
        <NavLink className="link white hover-moon-gray" to="/">
          <Header />
        </NavLink>
      )}
    </div>
  );
};
