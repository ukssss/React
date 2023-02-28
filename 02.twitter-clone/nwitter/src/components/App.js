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
          displayName: authService.currentUser.displayName ? authService.currentUser.displayName : 'Anonymous',
          uid: authService.currentUser.uid,
        });
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  return <>{init ? <AppRouter isLoggedIn={Boolean(isLoggedIn)} userObj={userObj} /> : 'Initializing...'}</>;
}

export default App;
