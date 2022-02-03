import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

export function PublicRoute({ isAuth, component: PublicPage }) {
  return (
    <>
      <h1>Public</h1>
      {isAuth ? <Navigate to="/" /> : <PublicPage />}

      {/* <Login /> */}
    </>
  );
}
PublicRoute.propTypes = {
  isAuth: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
};
