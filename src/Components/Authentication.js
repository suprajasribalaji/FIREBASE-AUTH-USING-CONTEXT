import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthenticationContext = createContext();

export const useAuth = () => {
  return useContext(AuthenticationContext);
};

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {

      if(authUser){
        authUser.getIdToken().then((token) => {
          console.log('token:', token);
          setUser(token);
          console.log("user:", user);
        });
      } else {
        console.log('authUser2:', authUser);
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  return (
    <AuthenticationContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
