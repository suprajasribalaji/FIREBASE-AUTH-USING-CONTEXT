
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Authentication';
import User from './User';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const authenticate = useAuth();
   console.log(authenticate.user);
  const handleLogin = async () => {

    try {
      authenticate.login(email, password);  
      setEmail('');
      setPassword('');
      
      navigate('/loggedin');
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <User />
      </div>
      <div className="flex justify-center p-9">
        <div className="border border-black bg-white p-8 rounded-lg w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-500 text-white p-2 rounded hover-bg-blue-700"
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
