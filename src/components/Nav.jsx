import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const toggleNav = () => {
    setNav(!nav);
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex items-center justify-between h-20 font-semibold rounded-div">
      {/*Home nav*/}
      <Link to={'/'}>
        <h1 className="text-2xl font-bold ml-4">Crypto Watcher</h1>
      </Link>
      {/*Theme toggler*/}
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/*Login/Register*/}
      {user?.email ? (
        <div className="hidden md:block mr-4">
          <Link to={'/account'} className="p-4 hover:text-accent">
            Account
          </Link>
          <Link
            to={'/'}
            onClick={handleLogOut}
            className="bg-button text-buttonText px-5 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:text-primary hover:bg-secondary"
          >
            Log out
          </Link>
        </div>
      ) : (
        <div className="hidden md:block mr-4">
          <Link to={'/login'} className="p-4 hover:text-accent">
            Login
          </Link>
          <Link
            to={'/register'}
            className="bg-button text-buttonText px-5 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:text-primary hover:bg-secondary"
          >
            Register
          </Link>
        </div>
      )}

      {/*Hamburger Icon*/}
      <div onClick={toggleNav} className="block md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {/*Mobile menu*/}
      <div
        className={
          nav
            ? 'flex flex-col md:hidden items-center justify-between w-full h-[90%] fixed right-0 top-20 bg-primary ease-in duration-200 z-10'
            : 'flex flex-col items-center justify-between fixed right-[-100%] top-20 h-[90%] ease-in duration-200'
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6 ml-2  justify-between items-start">
            <div className="flex flex-row">
              <AiOutlineHome className="text-primary text-2xl mr-4" />
              <Link
                to={'/'}
                className=" items-center cursor-pointer"
                onClick={toggleNav}
              >
                Home
              </Link>
            </div>
          </li>
          <li className="border-b py-6 ml-2  justify-between items-start">
            <div className="flex flex-row">
              <AiOutlineUser className="text-primary text-2xl mr-4" />
              <Link
                to={'/account'}
                className=" items-center cursor-pointer"
                onClick={toggleNav}
              >
                Account
              </Link>
            </div>
          </li>
          <li className="border-b py-6 ml-2">
            <ThemeToggle />
          </li>
        </ul>
        {user?.email ? (
          <div onClick={toggleNav} className="flex flex-col w-full p-4">
            <Link to={'/'} onClick={handleLogOut}>
              <button className="w-full my-2 p-3 bg-button text-buttonText shadow-xl rounded-2xl">
                Log out
              </button>
            </Link>
          </div>
        ) : (
          <div onClick={toggleNav} className="flex flex-col w-full p-4">
            <Link to={'/login'}>
              <button className="w-full my-2 p-3 bg-secondary text-primary font-semibold border border-slate-400   rounded-2xl shadow-xl">
                Login
              </button>
            </Link>
            <Link to={'/register'}>
              <button className="w-full my-2 p-3 bg-button font-semibold text-buttonText shadow-xl rounded-2xl">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
