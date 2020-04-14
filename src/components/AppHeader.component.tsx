import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header: React.FunctionComponent = () => (
  <h1 className="tc">Gallery of Popular Artists</h1>
);

export const AppHeader: React.FunctionComponent = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-dark-gray white pa3">
      {pathname === '/art-gallery' || pathname === '/art-gallery/' ? (
        <Header />
      ) : (
        <NavLink className="link white hover-moon-gray" to="/art-gallery">
          <Header />
        </NavLink>
      )}
    </div>
  );
};
