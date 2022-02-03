import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../redux/auth/authThunks';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(signupThunk(user));
    setName('');
    setEmail('');
    SetPassword('');
  };

  const nameId = uuidv4();
  const mailId = uuidv4();
  const passwordId = uuidv4();
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={mailId}>Name</label>
        <input
          type="text"
          name="email"
          required
          value={name}
          id={nameId}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
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
