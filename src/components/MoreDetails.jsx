import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { LinearProgress, Typography } from "@mui/material";
import CoinInfo from "../components/Coininfo";
import { SingleCoin } from "../confg/api";
import "../pages/coinpage.css";
import { Button } from "react-bootstrap";
import { numberWithCommas } from "../components/banner/Carousel";

// import coin from '../pages/Coinpage'

const MoreDetails = () => {
  const { id } = useParams();
  const [coin, setcoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setcoin(data);
  };
  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div
      style={{
        width: "95%",
        backgroundColor: "#1C1D26",
        display: "block",
        margin: "0 auto",
        padding: "10px",
      }}
    >
      <h3>Coin Information</h3>

      <div className="flex-column">
        <div style={{display:"flex", margin:"0 auto", justifyContent:"center", gap:"10px", alignItems:"center"}}>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height="40"
            style={{ marginBottom: 20 }}
          />
         
            <h4>{coin?.name}</h4>
            <p>{coin?.symbol}</p>
  
      </div>
      <div>
        <h5>Description</h5>
        <p style={{padding:"20px"}}>{coin?.description.en}</p>
       
      </div>
    </div>
    </div>
  );
};

export default MoreDetails;
