import React, { useState } from 'react';

const Auth = () => {
  const [form, setForm] = useState('');

  const onChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name='email' type='text' placeholder='Email' required onChange={onChange} />
        <input name='password' type='password' placeholder='Password' required onChange={onChange} />
        <input type='submit' placeholder='Log In' required />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
