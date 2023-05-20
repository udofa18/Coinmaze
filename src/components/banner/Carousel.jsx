import React, { useEffect, useState } from "react";
import axios from "axios"
import { TrendingCoins } from "../../confg/api";
import AliceCarousel from 'react-alice-carousel';
import { Link } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import "./carousel.css"

const container={
  height: "100%",
  display: "flex",
  alignItems: 'center',

}
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async() => {
   
   const {data} = await axios.get(TrendingCoins(currency))
   setTrending(data)
console.log(data)
  };

  useEffect(()=>{
    fetchTrendingCoins()
  })
  const items = trending.map ((coin) =>{
    let profit = coin?.price_change_percentage_24h >= 0;
    return(
      <Link className="carouselItem" to={`/coins/${coin.id}`}>
       
        <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
          />
           <div>
           {coin?.name}&nbsp;
            ({coin?.symbol})
            &nbsp;
            <span
              style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
           
          </div>
          <span style={{ fontSize: 22, fontWeight: 500, color: "gold", margin: "10px" ,
           }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
          
      </Link>
    )
  })
  const responsive ={
    0: {
      items: 2,
    },
    512:{
      items: 6,
    }
  }
  return <div style= { container }>
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={500}
      animationDuration={500}
      disableDotsControls
      responsive={responsive}
      autoPlay
      items={items}

    />
  </div>;
};

export default Carousel;
