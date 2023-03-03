import React, { useState } from 'react';
import { authService } from 'fbase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const inputStyles = {};

const AuthForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
      <form onSubmit={onSubmit} className='container'>
        <input name='email' type='text' placeholder='Email' required onChange={onChange} className='authInput' />
        <input name='password' type='password' placeholder='Password' required onChange={onChange} className='authInput' />
        <input type='submit' className='authInput authSubmit' value={newAccount ? 'Create Account' : 'Log In'} />
        {error && <span className='authError'>{error}</span>}
      </form>
      <span onClick={toggleAccount} className='authSwitch'>
        {newAccount ? 'Sign In' : 'Create Account'}
      </span>
    </>
  );
};

export default AuthForm;
