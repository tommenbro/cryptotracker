import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';

const CoinPage = () => {
  const [coin, setCoin] = useState([]);
  const params = useParams();

  // CoinGecko Coin ID API
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data);
      console.log(res.data);
    });
  }, [url]);

  return (
    <>
      {/*Coin Card*/}
      <div className="rounded-div-3 my-8 py-4 grid-cols-1 grid pl-4">
        <div className="text-right text-xs font-light mb-2 pb-2 px-4">
          <p>Last Updated</p>
          {coin.market_data?.last_updated ? (
            <p>{coin.market_data?.last_updated?.toLocaleString()}</p>
          ) : null}
        </div>
        <div className="flex py-8">
          <img className="w-20 mr-8" src={coin.image?.large} alt="" />
          <div>
            <p className="text-3xl font-bold">{coin?.name} price</p>
            <p className="text-xl">({coin.symbol?.toUpperCase()} / USD)</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <div className="flex justify-between">
              {/*Shows BTC & USD price */}
              {coin.market_data?.current_price ? (
                <p className="text-3xl font-bold">
                  1 {coin.symbol?.toUpperCase()} = $
                  {coin.market_data?.current_price?.usd.toLocaleString()}
                </p>
              ) : null}
              <p>7 Day</p>
            </div>
            {/*Sparkline chart */}
            <div>
              <Sparklines data={coin.market_data?.sparkline_7d.price}>
                <SparklinesLine color="green"></SparklinesLine>
              </Sparklines>
            </div>
            {/*Market cap */}
            <div className="flex justify-between py-4">
              <div>
                <p className="text-accent text-sm">Market Cap</p>
                {coin.market_data?.market_cap ? (
                  <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              {/*Volume 24h*/}
              <div>
                <p className="text-accent text-xs">Volume 24h</p>
                {coin.market_data?.market_cap ? (
                  <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
            {/*24h low/high */}
            <div className="flex justify-between py-4">
              <div>
                <p className="text-accent text-xs">24h Low</p>
                {coin.market_data?.low_24h ? (
                  <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div>
                <p className="text-accent text-xs">24h High</p>
                {coin.market_data?.high_24h ? (
                  <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
          </div>
          {/*Market stats */}
          <div className="">
            <p className="text-xl font-bold pl-2">Market Stats</p>
            <div className="grid grid-cols-4 justify-between pt-4 pl-2">
              <div className="py-1">
                <p className="text-accent text-xs">Market Rank</p>#
                {coin.market_cap_rank}
              </div>
              <div className="mx-1">
                <p className="text-accent text-xs">% from ATH</p>

                {coin.market_data?.ath_change_percentage ? (
                  <p>{coin.market_data.ath_change_percentage.usd.toFixed(2)}</p>
                ) : null}
              </div>
              <div className="mx-1">
                <p className="text-accent text-xs">All Time High</p>
                {coin.market_data?.ath ? (
                  <p>${coin.market_data.ath.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="mx-1">
                <p className="text-accent text-xs">All Time Low</p>
                {coin.market_data?.atl ? (
                  <p>${coin.market_data.atl.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
            <div className="">
              <div className="mt-1">
                <div className="grid grid-cols-4 justify-between py-4  space-y-4 space-x-2 -pl-2">
                  <div className="pt-4  pl-2">
                    <p className="text-accent text-xs">
                      Price Change <span className="font-bold">1h</span>
                    </p>
                    {coin.market_data ? (
                      <p>
                        {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div className="mx-1">
                    <p className="text-accent text-xs">
                      Price Change <span className="font-bold">24h</span>
                    </p>
                    {coin.market_data ? (
                      <p>
                        {coin.market_data.price_change_percentage_24h.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div className="mx-1">
                    <p className="text-accent text-xs">
                      Price Change <span className="font-bold">7d</span>
                    </p>
                    {coin.market_data ? (
                      <p>
                        {coin.market_data.price_change_percentage_7d.toFixed(2)}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div className="mx-1">
                    <p className="text-accent text-xs">
                      Price Change <span className="font-bold">14d</span>
                    </p>
                    {coin.market_data ? (
                      <p>
                        {coin.market_data.price_change_percentage_14d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div className="mx-1 pt-4">
                    <p className="text-accent text-xs">
                      Price Change <span className="font-bold">30d</span>
                    </p>
                    {coin.market_data ? (
                      <p>
                        {coin.market_data.price_change_percentage_30d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div className="mx-1 pt-4">
                    <p className="text-accent text-xs">
                      Price Change <span className="font-bold">60d</span>
                    </p>
                    {coin.market_data ? (
                      <p>
                        {coin.market_data.price_change_percentage_60d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div className="mx-1 pt-4">
                    <p className="text-accent text-xs">
                      Price Change <span className="font-bold">200d</span>
                    </p>
                    {coin.market_data ? (
                      <p>
                        {coin.market_data.price_change_percentage_200d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div className="mx-1 pt-4">
                    <p className="text-accent text-xs">
                      Price Change <span className="font-bold">1y</span>
                    </p>
                    {coin.market_data ? (
                      <p>
                        {coin.market_data.price_change_percentage_1y.toFixed(2)}
                        %
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Description */}
        <div className="w-full pt-4 ">
          <p className="text-xl font-bold pb-1">About {coin.name}</p>
          <p
            className="pr-4"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description?.en ? coin.description.en : ''
              ),
            }}
          ></p>
        </div>

        <div className="flex pt-4">
          <div className="flex justify-left space-x-8 text-accent">
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
        <div className="pt-2 text-blue-400">
          <a href={coin.links?.homepage[0]} target="_blank" rel="noreferrer">
            {coin.links?.homepage[0]}
          </a>
        </div>

        {/*More stats*/}
        <div className="pt-4">
          <p className="text-xl font-bold pr-2">Advanced Stats</p>
          <div className="grid grid-cols-4 pt-2 justify-between py-4 space-y-4">
            <div className="py-2">
              <p className="text-accent text-xs">Circulating Supply</p>
              {coin.market_data?.circulating_supply.toLocaleString()}
            </div>
            <div className="">
              <p className="text-accent text-xs">Total Supply</p>

              {coin.market_data?.total_supply
                ? coin.market_data?.total_supply.toLocaleString()
                : coin.market_data?.max_supply.toLocaleString()}
            </div>
            <div>
              <p className="text-accent text-xs">Current Volume</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-accent text-xs">Total Volume</p>$
              {coin.market_data?.total_volume.usd.toLocaleString()}
            </div>
            <div className="">
              <p className="text-accent text-xs">Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div className="">
              <p className="text-accent text-xs">Blocks Per Minute</p>
              {coin.hashing_algorithm ? (
                <p>{coin.block_time_in_minutes}</p>
              ) : null}
            </div>
            <div className="">
              <p className="text-accent text-xs">Country of origin</p>
              {coin.country_origin ? <p>{coin.country_origin}</p> : null}
            </div>
            <div className="">
              <p className="text-accent text-xs">Genesis Date</p>
              {coin.genesis_date ? <p>{coin.genesis_date}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinPage;
