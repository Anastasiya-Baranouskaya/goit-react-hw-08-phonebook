import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export function PublicRoute({
  redirectedTo = '/',
  restricted = false,
  component: PublicPage,
}) {
  const isAuth = useSelector(authSelectors.getAuth);
  const shouldNavigate = isAuth && restricted;
  return (
    <>{shouldNavigate ? <Navigate to={redirectedTo} /> : <PublicPage />}</>
  );
}
