import React from 'react';
import { useAuth } from './Authentication';
import User from './User';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const authenticate = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    authenticate.logout();
    navigate('/');
  };

  if (authenticate.user) {
    return (
      <div className="bg-white flex flex-col justify-center items-center">
        <div className="bg-white rounded-lg p-8 mb-4">
          <User />
        </div>
        <p className="text-xl font-semibold mb-4">YOU ARE LOGGED IN!</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 mt-2 rounded-md font-semibold"
        >
          LOG OUT
        </button>
      </div>
    );
  } 
};

export default Logout;
