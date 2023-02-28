import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import { onAuthStateChanged } from 'firebase/auth';
import { authService } from 'fbase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          uid: user.uid,
          displayName: user.displayName ? user.displayName : 'Anonymous',
        });
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName,
    });
  };

  return <>{init ? <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(isLoggedIn)} userObj={userObj} /> : 'Initializing...'}</>;
}

export default App;
