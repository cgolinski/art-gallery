import * as React from 'react';
import { useHistory } from 'react-router-dom';

export const HomeButton = () => {
  const history = useHistory();

  const handleClick = () => history.push('/');

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
};
