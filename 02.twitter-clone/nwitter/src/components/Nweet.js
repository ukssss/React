import { dbService, storageService } from 'fbase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm('Are you sure you want to delete this nweet?');
    if (ok) {
      await deleteDoc(doc(dbService, 'nweets', nweetObj.id));
      if (nweetObj.attachmentUrl !== '') {
        await deleteObject(ref(storageService, nweetObj.attachmentUrl));
      }
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (e) => {
    e.preventDefault();
    const nweetDoc = doc(dbService, 'nweets', nweetObj.id);
    await updateDoc(nweetDoc, {
      text: newNweet,
    });
    setEditing(false);
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewNweet(value);
  };

  return (
    <div className='nweet'>
      {editing ? (
        <>
          <form onSubmit={onSubmit} className='container nweetEdit'>
            <input type='text' placeholder='Edit your Nweet' value={newNweet} autoFocus onChange={onChange} required className='formInput' />
            <input type='submit' value='Update Nweet' className='formBtn' />
          </form>
          <span onClick={toggleEditing} className='formBtn cancelBtn'>
            Cancel
          </span>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} alt='' />}
          {isOwner && (
            <div className='nweet__actions'>
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
