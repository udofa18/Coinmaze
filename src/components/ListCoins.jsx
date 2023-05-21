import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import "./listCoin.css";

const ListCoins = () => {
  const [coin, setCoin] = useState("");
  const [exchange, setExchange] = useState("");
  const { currency, symbol } = CryptoState();

  useEffect(() => {
    axios
      .get(" https://api.coingecko.com/api/v3/search/trending")
      .then((res) => setCoin(res.data));
  }, []);

  console.log(coin);
  useEffect(() => {
    axios
      .get(" https://api.coingecko.com/api/v3/exchanges?per_page=10")
      .then((res) => setExchange(res.data));
  }, []);
  console.log(exchange);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", padding: "5%" }}
      className="mobile"
    >
      <Card
        style={{ width: "50%", backgroundColor: "#2B2E31", padding: "10px", margin: "20px" }} className="mobile"
      >
        <Card.Header style={{ fontSize: "1rem", textAlign: "left" }}>
          Trending Coins
        </Card.Header>
        <ListGroup variant="flush">
          {coin &&
            coin.coins.map((coin) => (
              <>
                <ListGroup.Item
                  style={{
                    backgroundColor: "#2A2D31",
                    fontSize: "15px",
                    textAlign: "left",
                    textTransform: "capitalize",
                    color: "gold",
                  }}
                >
                  <img src={coin.item.thumb} style={{ paddingRight: "10px" }} />

                  {coin.item.id}
                </ListGroup.Item>
              </>
            ))}
        </ListGroup>
      </Card>

      <Card
        style={{ width: "50%", backgroundColor: "#2B2E31", padding: "20px" , margin: "20px", }} className="mobile"
      >
        <Card.Header style={{ fontSize: "1rem", textAlign: "left" }}>
          Exchange list
        </Card.Header>
        <ListGroup variant="flush">
          {exchange &&
            exchange.map((exchange) => (
              <>
                <ListGroup.Item
                className="mobile"
                  style={{
                    backgroundColor: "#2A2D31",
                    fontSize: "15px",
                    textAlign: "left",
                    textTransform: "capitalize",
                    color: "gold",
                    display: "flex",
                  }}
                >
                  <a href={exchange.url} className="mobile2">
                   <div>
                    <img
                      src={exchange.image}
                      style={{ paddingRight: "10px" }}
                      height="20"
                    />

                    {exchange.name}
                    </div>
                    <div style={{ marginLeft: "40px", color: "silver" }} className="mobile2">
                    <div>
                      Trade Volume (btc) :
                      <span style={{ marginLeft: "10px" }}>
                        {exchange.trade_volume_24h_btc}{" "}
                      </span>
                      </div>
                      <div>
                        <span style={{ color: "silver" }}>
                          TSR:{exchange.trust_score_rank}
                        </span>
                      </div>
                    </div>
                  </a>
                </ListGroup.Item>
              </>
            ))}
        </ListGroup>
      </Card>
     
    </div>
  );
};

export default ListCoins;
