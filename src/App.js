import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import axios from 'axios';
import CoinPage from './pages/CoinPage';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  const [coins, setCoins] = useState([]);

  /*CoinGecko Crypto-USD - 25pp API*/
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
