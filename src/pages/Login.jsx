import React from 'react';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-3xl font-bold">Log In</h1>
        <form>
          <div className="my-4">
            <label className="text-sm">Email: </label>
            <div className="my-2 w-full relative rounded-xl shadow-xl">
              <input
                className="w-full px-4 p-2 bg-secondary border-input rounded-2xl"
                type="email"
                placeholder="Enter your email"
              />
              <AiOutlineMail className="absolute right-5 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label className="text-sm">Password: </label>
            <div className="my-2 w-full relative rounded-xl shadow-xl">
              <input
                className="w-full px-4 p-2 bg-secondary border-input rounded-2xl"
                type="password"
                placeholder="Enter your password"
              />
              <AiFillLock className="absolute right-5 top-3 text-gray-400" />
            </div>
          </div>
          <button className="font-semibold w-full my-2 p-3 bg-button text-buttonText rounded-2xl shadow-xl hover:shadow-2xl hover:text-secondary ">
            Log In
          </button>
        </form>
        <p className="my-4 text-sm">
          Don't have an account?
          <Link to="/register" className="font-semibold text-accent ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
