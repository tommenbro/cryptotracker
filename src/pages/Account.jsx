import React from 'react';
import { useNavigate } from 'react-router-dom';
import SavedCoin from '../components/SavedCoin';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div>
          <h1 className="text-2xl font-bold pb-2">Account</h1>
          <div>
            <p>
              Welcome, <span className="font-semibold">{user?.email}</span>
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={handleLogOut}
            className="font-semibold px-6 py-2 rounded-2xl shadow-lg hover:border-accent bg-secondary hover:bg-accent hover:text-accent hover:shadow-xl"
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div className="w-full min-h-[300px] ">
          <h1 className="text-2xl font-bold py-4">Watchlist</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
  );
};

export default Account;
