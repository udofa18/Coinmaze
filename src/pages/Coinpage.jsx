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
import MoreDetails from "../components/MoreDetails";

const Coinpage = () => {
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

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  let profit = coin?.market_data.price_change_percentage_24h >= 0;

  return (
    <>
      <div className="container">
      
        <div style={{ display: "block" }} className="sidebar">
          <div style={{ display: "flex" }}>
            <Button className="button">Rank #{coin?.market_cap_rank} </Button>
            <Button className="button bg-danger border-0">
              Coingecko Score: {coin?.coingecko_score}{" "}
            </Button>
          </div>

          <div className="coindata1">
            <img
              src={coin?.image.large}
              alt={coin?.name}
              height="40"
              style={{ marginBottom: 20 }}
            />
            <h2
              style={{
                marginLeft: "1rem",
                fontWeight: "bolder",
                textTransform: "capitalize",
              }}
            >
              {coin?.id}
            </h2>
            <h4 style={{ marginLeft: "1rem" }}>{coin?.symbol}</h4>
            <Button className="button ms-4">
              <i className="fas fa-star "></i>
            </Button>
            <Button className="button">
              <i className="fas fa-bell"></i>
            </Button>
            <Button className="button">
              <i className="fas fa-share-nodes"></i>
            </Button>
          </div>
         
            <div style={{display:"flex"}}>
          <h1 style={{ fontSize: "3rem", textAlign: "left", color:"gold", fontWeight:"bolder"}}>
            {symbol}{" "}
            {numberWithCommas(
              coin?.market_data.current_price[currency.toLowerCase()]
            )}
          </h1>
          <h3
              style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500, margin:"10px"
              }}
            >
              {profit && "+"}
              {coin?.market_data.price_change_percentage_24h?.toFixed(2)}%
            </h3>
            </div>
            <Button className="button">
          <i className="fas fa-star" style={{color:"gold"}}></i>
          Featured in {numberWithCommas( coin?.watchlist_portfolio_users
            )} wathlist
            </Button>
        </div>
        <CoinInfo></CoinInfo>
       
      </div>
      <div>
       <MoreDetails></MoreDetails>  
      </div>
    </>
  );
};

export default Coinpage;
