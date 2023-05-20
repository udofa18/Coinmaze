import React from "react";
import Card from "react-bootstrap/Card";
import "./banner.css";
import Carousel from "./Carousel";
import { CryptoState } from "../../CryptoContext";
import '@fortawesome/fontawesome-free/css/all.css'


const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-con">
      <h1 className="coinmaze">
      <i className="fas fa-coins"></i>
    
      Coin<span style={{ color: "gold" }}>Maze</span></h1>
      <p style={{width:"40%", textAlign:"center", margin:"0 auto", marginBottom:"2rem"}}>Complete cryptocurrency market coverage with live coin prices, charts and crypto market cap featuring 24211 coins on 626 exchanges.</p>
      </div>
      
      <div className="carousel-con">
        <Carousel/>
      </div>
    </div>
  );
};

export default Banner;
