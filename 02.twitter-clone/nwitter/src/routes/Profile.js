import React, { useEffect } from 'react';
import { authService, dbService } from 'fbase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Profile = ({ userObj }) => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };

  const getMyNweets = async () => {
    const q = query(collection(dbService, 'nweets'), where('creatorId', '==', userObj.uid), orderBy('createdAt', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      const nweetArr = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(nweetArr);
    });
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
