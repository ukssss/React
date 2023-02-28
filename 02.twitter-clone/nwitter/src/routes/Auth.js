import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authService } from 'fbase';
import AuthForm from 'components/AuthForm';

const Auth = () => {
  const [error, setError] = useState('');

  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;

    let provider;

    try {
      if (name === 'google') {
        provider = new GoogleAuthProvider();
      } else if (name === 'github') {
        provider = new GithubAuthProvider();
      }
      await signInWithPopup(authService, provider);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <AuthForm />
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
