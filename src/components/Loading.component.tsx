import * as React from 'react';
import './Loading.component.css';

export const Loading: React.StatelessComponent = () => (
  <div className="loading-spinner">
    <span role="img" aria-label="loading-spinner" className="loading-spinner">
      🎨
    </span>
  </div>
);
