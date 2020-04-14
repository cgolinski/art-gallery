import * as React from 'react';

type ErrorProps = {
  errorMessage?: string;
};
export const Error: React.FunctionComponent<ErrorProps> = ({
  errorMessage = 'Error: unknown',
}) => (
  <div>
    <p className="f3 dark-grey">
      In art, an "oops" can be beautiful. In your browser, an "oops" is just an
      "oops". Try refreshing your browser.
    </p>
    <p>{errorMessage}</p>
    {console.error('Error: ', errorMessage)}
  </div>
);
