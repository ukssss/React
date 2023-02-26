import React, { useEffect, useState } from 'react';
import { dbService } from 'fbase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState('');
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    const q = query(collection(dbService, 'nweets'), orderBy('createdAt', 'desc'));
    onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(dbService, 'nweets'), {
      text: nweet,
      createdAt: serverTimestamp(),
      creatorId: userObj.uid,
    });

    setNweet('');
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={nweet} onChange={onChange} type='text' placeholder="what's on your mind?" maxLength={120}></input>
        <input type='submit' value='Nweet' />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.text}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
