import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthenticationProvider } from './Components/Authentication';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import User from './Components/User';
import SignupPage from './Components/Signup';
import LoginPage from './Components/LoginPage';
import Logout from './Components/Logout';

function ProtectedRoute({ element: Element }) {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [isPageLoad, setIsPageLoad] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setIsPageLoad(false); 
    });

    return () => unsubscribe();
  }, [auth]);

  if (isPageLoad) {
    return <div>Loading...</div>;
  }

  if (user === null) {  
    return <Navigate to="/login" replace />;
  }

  return <Element />;
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loggedin" element={<ProtectedRoute element={Logout} />} />
      </Routes>
    </Router>
  );
}

function MainApp() {
  return (
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  );
}

export default MainApp;
