import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export function PrivateRoute({ component: ContactsPage }) {
  const isAuth = useSelector(authSelectors.getAuth);
  return <>{isAuth ? <ContactsPage /> : <Navigate to="/login" />}</>;
}
