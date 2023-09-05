import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {

  const [coins, setCoins] = useState([])

  const url = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
