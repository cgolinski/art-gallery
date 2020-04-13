import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const HomeButton = () => {
  return (
    <NavLink to="/">
      <button className="br4 bg-lightest-blue ph3 pv2 mt3 ml3 b" type="button">
        {`<`} return to gallery
      </button>
    </NavLink>
  );
};
