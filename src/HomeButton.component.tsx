import * as React from 'react';
import { useHistory } from 'react-router-dom';

export const HomeButton = () => {
  const history = useHistory();

  const handleClick = () => history.push('/');

  return (
    <button
      className="br4 bg-lightest-blue ph3 pv2 mt3 ml3 b"
      type="button"
      onClick={handleClick}
    >
      {`<`} return to gallery
    </button>
  );
};
