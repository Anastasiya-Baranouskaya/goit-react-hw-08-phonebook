import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/auth/authThunks';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        SetPassword(value);
        break;
      default:
        return;
    }
  };
  const handleChange = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginThunk(user));
    setEmail('');
    SetPassword('');
  };
  const mailId = uuidv4();
  const passwordId = uuidv4();

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={mailId}>Mail</label>
        <input
          type="mail"
          name="email"
          required
          value={email}
          id={mailId}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label onSubmit={handleSubmit}>Password</label>
        <input
          type="password"
          name="passwod"
          required
          value={password}
          id={passwordId}
          onChange={handleChange}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}
