import React, { useState } from 'react';
import { authService } from 'fbase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Profile = ({ userObj, refreshUser }) => {
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewDisplayName(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(authService.currentUser, { displayName: newDisplayName });
      refreshUser();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={onChange} placeholder='Display Name' value={newDisplayName} />
        <input type='submit' value='Update Profile' className='Btn updateProfileBtn' />
      </form>
      <button onClick={onLogOutClick} className='Btn logoutBtn'>
        Log Out
      </button>
    </>
  );
};

export default Profile;
