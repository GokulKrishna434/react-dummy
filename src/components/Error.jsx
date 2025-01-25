import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h2>Something went wrong.</h2>
      <p>
        {error.status}: {error.statusText}
      </p>
    </div>
  );
};

export default Error;
