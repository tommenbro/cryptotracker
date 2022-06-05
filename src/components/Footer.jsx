import React from 'react';
import ThemeToggle from './ThemeToggle';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="rounded-div m-8 pt-4 pb-4 text-primary">
      <div className="flex items-center justify-center md:justify-center py-2 md:py-0 md:pb-4 mt-[-1rem]">
        <ThemeToggle />
      </div>
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px]">
          <div>
            <h2 className="font-bold ">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About</li>
              <li className="text-sm py-2">Careers</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>

        <div className="text-right ">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <p className="text-left pl-2">
                Sign up for info about new cryptos
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="border-transparent-100 bg-secondary p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="bg-button text-buttonText px-4 p-2 w-full rounded-2xl shadow-lg hover:bg-secondary hover:text-primary hover:shadow-xl md:w-auto my-2 font-semibold">
                    Sign up
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between md:ml-2 text-accent">
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4 pb-4">Powered by CoinGecko</p>
    </div>
  );
};

export default Footer;
