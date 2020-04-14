import * as React from 'react';
import './Loading.component.css';

export const Loading: React.FunctionComponent = () => (
  <div className="wrapper">
    <div className="loading-spinner">
      <span role="img" aria-label="loading-spinner">
        🎨
      </span>
    </div>
  </div>
);
