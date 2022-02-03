import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

export function PrivateRoute({ isAuth, component: PrivatePage }) {
  return (
    <>
      <h1>Private</h1>
      {isAuth ? <PrivatePage /> : <Navigate to="/login" />}
    </>
  );
}
PrivateRoute.propTypes = {
  isAuth: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
};
