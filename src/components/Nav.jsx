import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex items-center justify-between h-20 font-semibold rounded-div">
      {/*Home nav*/}
      <Link to={'/'}>
        <h1 className="text-2xl font-bold">CryptoTracker</h1>
      </Link>
      {/*Theme toggler*/}
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      {/*Login/Register*/}
      <div className="hidden md:block">
        <Link to={'/login'} className="p-4 hover:text-accent">
          Login
        </Link>
        <Link
          to={'/register'}
          className="bg-button text-buttonText px-5 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:text-primary"
        >
          Register
        </Link>
      </div>
      {/*Hamburger Icon*/}
      <div onClick={toggleNav} className="block md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {/*Mobile menu*/}
      <div
        className={
          nav
            ? 'flex flex-col md:hidden items-center justify-between w-full h-[90%] fixed right-0 top-20 bg-primary ease-in duration-300 z-10'
            : 'flex flex-col items-center justify-between fixed right-[-100%] top-20 h-[90%] ease-in duration-300'
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="border-b py-6">
            <Link to={'/'}>Account</Link>
          </li>
          <li className="">
            <ThemeToggle />
          </li>
        </ul>
        <div className="flex flex-col w-full p-4">
          <Link to={'/login'}>
            <button className="w-full my-2 p-3 bg-primary text-primary border border-slate-400   rounded-2xl shadow-xl">
              Login
            </button>
          </Link>
          <Link to={'/register'}>
            <button className="w-full my-2 p-3 bg-button text-buttonText shadow-xl rounded-2xl">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;