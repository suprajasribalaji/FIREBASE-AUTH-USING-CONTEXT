import React, { useState,useEffect } from "react";
import User from "./User";
import { auth } from './firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignupPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [signflag,setSignup] = useState(null);


  useEffect(()=>{
    if(signflag)
    {
        const timer = setTimeout(()=>{
          setSignup(false);
        },2000)

        return()=>clearTimeout(timer);
    }
  },[signflag]);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, mail, password);
      setMail('');
      setPassword('');
      setSignup(true);
      console.log("User registered:", user);
      alert("User registered successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <User />
      </div>
      <div className="flex items-center justify-center m-10">
        <div className="bg-white border border-black p-8 rounded-lg m-10 w-96">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 text-sm mb-2">Set Password</label>
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
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              onClick={() => register()}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
