import { async } from '@firebase/util';
import { dbService, storageService } from 'fbase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NweetFactory = ({ userObj }) => {
  const [attachment, setAttachment] = useState('');
  const [nweet, setNweet] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = '';
    if (attachment !== '') {
      const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      const resp = await uploadString(attachmentRef, attachment, 'data_url');
      attachmentUrl = await getDownloadURL(resp.ref);
    }

    await addDoc(collection(dbService, 'nweets'), {
      text: nweet,
      createdAt: serverTimestamp(),
      creatorId: userObj.uid,
      attachmentUrl,
    });

    setNweet('');
    setAttachment('');
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const fileArr = files[0];
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(fileArr);
  };

  const onClearAttachment = () => setAttachment(null);

  return (
    <form onSubmit={onSubmit}>
      <input value={nweet} onChange={onChange} type='text' placeholder="what's on your mind?" maxLength={120}></input>
      <input type='file' accept='image/*' onChange={onFileChange} />
      <input type='submit' value='Nweet' />
      {attachment && (
        <div>
          <img src={attachment} width='50px' height='50px' alt='업로드사진' />
          <button onClick={onClearAttachment}>Clear</button>
        </div>
      )}
    </form>
  );
};

export default NweetFactory;
