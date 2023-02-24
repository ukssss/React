import { authService, firebaseInstance } from 'fbase';
import React, { useState } from 'react';

const Auth = () => {
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
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name='email' type='text' placeholder='Email' required onChange={onChange} />
        <input name='password' type='password' placeholder='Password' required onChange={onChange} />
        <input type='submit' value={newAccount ? 'Create Account' : 'Log In'} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? 'Sign In' : 'Create Account'}</span>
      <div>
        <button name='google'>Continue with Google</button>
        <button name='github'>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
