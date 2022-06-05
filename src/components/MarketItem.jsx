import React from 'react';
import { Link } from 'react-router-dom';

const MarketItem = ({ coin, exchange }) => {
  return (
    <div>
      <>
        <tr>
          <td>{exchange.trust_score_rank}</td>
          <td>
            <Link to={coin.tickers?.trade_url}>
              <div>
                <img src={exchange.image} alt={exchange.id} />
                <p>{exchange.name}</p>
              </div>
            </Link>
          </td>
          <td>
            {coin.tickers?.base.toUpperCase()} /{' '}
            {coin.tickers?.target.toUpperCase()}
          </td>
          <td>{coin.tickers?.volume.toFixed(2)}</td>
        </tr>
      </>
    </div>
  );
};

export default MarketItem;
