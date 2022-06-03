import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trending = () => {
  const [trending, setTrending] = useState([]);

  /*CoinGecko Trending API*/
  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    axios.get(url).then((res) => {
      setTrending(res.data.coins);
    });
  }, []);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-2xl font-bold py-4">🔥 Trending</h1>
      {/*Coin card*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {trending.map((coin, index) => (
          <div
            key={index}
            className="flex bg-red-500 justify-between rounded-div-2 p-12 hover:scale-105 hover:shadow-xl ease-in-out duration-200"
          >
            <div className="flex w-full items-center justify-between ">
              <div className="flex">
                <img
                  className="mr-2 rounded-full h-11"
                  src={coin.item.small}
                  alt={coin.id}
                />
                <div>
                  <p className="text-md font-semibold">{coin.item.name}</p>
                  <p className="text-xs">{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 m-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt=""
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
