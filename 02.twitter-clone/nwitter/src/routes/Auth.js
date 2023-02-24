import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { authService } from 'fbase';

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

  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;

    let provider;

    if (name === 'google') {
      provider = new GoogleAuthProvider();
      const result = await signInWithPopup(authService, provider);
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
      const result = await signInWithPopup(authService, provider);
    }

    const data = await signInWithPopup(provider);
    console.log(data);
  };

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
        <button onClick={onSocialClick} name='google'>
          Continue with Google
        </button>
        <button onClick={onSocialClick} name='github'>
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
