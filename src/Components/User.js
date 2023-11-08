import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const nav = useNavigate();

  const handleLogin = () => {
    nav(`/login`);
  };

  const handleSignup = () => {
    nav(`/signup`);
  };

  return (
    <div className=" flex justify-center">
      <div className="bg-white p-8 rounded-lg">
        <div className="flex flex-row pt-8 pl-80 pr-80">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mr-8 rounded-md font-semibold"
            onClick={() => handleLogin()}
          >
            LOG IN
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-semibold"
            onClick={() => handleSignup()}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
