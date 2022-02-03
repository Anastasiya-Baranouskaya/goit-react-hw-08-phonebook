import './App.css';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Section from './components/Section/Section';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import HomePage from './pages/HomePages';
import Login from './pages/Login';
import Register from './pages/Register';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUserThunk, logoutThunk } from './redux/auth/authThunks';
import { contactsSelectors } from './redux/contacts';

const isAuth = false;

export default function App() {
  const auth = useSelector(contactsSelectors.getAuth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <button type="button" onClick={handleLogout}>
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {!auth && (
          <Routes>
            <Route
              path="/"
              element={<PrivateRoute isAuth={isAuth} component={HomePage} />}
            />
            <Route
              path="/logit"
              element={<PublicRoute isAuth={isAuth} component={Login} />}
            />
            <Route
              path="/register"
              element={<PublicRoute isAuth={isAuth} component={Register} />}
            />
          </Routes>
        )}
        {auth && (
          <>
            <Section title="Phonebook">
              <ContactForm />
              <h1>Contacts</h1>
              <Filter />
              <ContactList />
            </Section>
          </>
        )}
      </main>
    </div>
  );
}
