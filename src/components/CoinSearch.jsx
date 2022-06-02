import React, { useState } from 'react';

import CoinItem from './CoinItem';

const CoinSearch = ({ coins }) => {
  const [searchParam, setSearchParam] = useState('');

  return (
    <div className="rounded-div my-4">
      {/*Search input*/}
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2 ">Search</h1>
        <form>
          <input
            className="w-full border-transparent-100 bg-secondary px-4 py-2 rounded-2xl shadow-lg"
            onChange={(e) => setSearchParam(e.target.value)}
            type="text"
            placeholder="Search for a coin"
          />
        </form>
      </div>

      {/*Coin list table*/}
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b-2 shadow-sm">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        {/*Coin list table inputs from API*/}
        <tbody>
          {coins
            .filter((value) => {
              if (searchParam === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchParam.toLowerCase()) ||
                value.symbol.toLowerCase().includes(searchParam.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
