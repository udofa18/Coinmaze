import React, { useEffect } from "react";
import Banner from "./Banner";
import { useState } from "react";
import axios from "axios";
import { CoinList } from "../../confg/api";
import { Await, Link, Navigate, Route, Router, useNavigation } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import * as ReactBootStrap from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import { numberWithCommas } from "./Carousel";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency, symbol } = CryptoState();

  const history = useNavigate();

  const fetchCoins = async () => {
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
  const theme = createTheme({
    pagination: {
    "& .MuiPaginationItem-root": {
      color: "gold",
    },}
  })
  // const useStyles = makeStyles({
  //   pagination: {
      
  //       color: "gold",
      
  //   },
  // });
  // const classes = useStyles();

  return (
    <div style={{ padding:"20px"}}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "white", marginTop: "4rem" }}>
          Cryto Currency list
        </h2>
        <Form.Floating
          className="mb-3 text-center m-auto my-fs-4 p-1"
          style={{ width: "30%" }}
        >
          <Form.Control
            style={{ color: "gold" }}
            className="bg-transparent"
            id="floatingInputCustom"
            type="text"
            placeholder="Search for a Cryptocurrency"
            onChange={(e) => setSearch(e.target.value)}
          />
          <label htmlFor="floatingInputCustom">Search Cryptocurrency</label>
        </Form.Floating>
      </div>
    
      {loading ? (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        
          <><ReactBootStrap.Table
              striped
              bordered
              hover
              variant="dark"
              className="p-3"
            >
              <thead>
                <tr style={{ backgroundColor: "gold", color: "gold" }}>
                  <th style={{ backgroundColor: "gold", color: "#1B2431" }}>
                    SN
                  </th>
                  <th style={{ backgroundColor: "gold", color: "#1B2431" }}>
                    Coin (<i className="fas fa-coins text-black"></i>)
                  </th>
                  <th style={{ backgroundColor: "gold", color: "#1B2431" }}>
                    Price (<i className="fas fa-dollar-sign text-black"></i>)
                  </th>
                  <th style={{ backgroundColor: "gold", color: "#1B2431" }}>
                    24 hours change (<i className="fas fa-clock text-black"></i>)
                  </th>
                  <th style={{ backgroundColor: "gold", color: "#1B2431" }}>
                    High (24h) (
                    <i className="fas fa-up-long " style={{ color: "green" }}></i>
                    )
                  </th>
                  <th style={{ backgroundColor: "gold", color: "#1B2431" }}>
                    Low (24h) (
                    <i className="fas fa-down-long " style={{ color: "red" }}></i>
                    )
                  </th>
                  <th style={{ backgroundColor: "gold", color: "#1B2431" }}>
                    Marketcap (<i className="fab fa-sellsy text-black"></i>)
                  </th>

                  <th style={{ backgroundColor: "gold", color: "#1B2431" }}>
                    ATH (<i className="fas fa-up-long text-black"></i>)
                  </th>
                  <th style={{ backgroundColor: "gold", color: "#1B2431" }}>
                    Total Volume (<i className="fas fa-calculator text-black"></i>
                    )
                  </th>
                </tr>
              </thead>

              <tbody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {

                    const profit = row.price_change_percentage_24h;
                    return (

                      <tr
                        onClick={() => history(`/coins/${row.id}`)}
                        key={row.name}
                        style={{ cursor: "pointer" }}
                      >

                        <td>{row.market_cap_rank}</td>
                        <td
                          style={{
                            display: "flex",
                            gap: 15,
                            textAlign: "center",
                            alignContent: "center",
                          }}
                        >
                          <img src={row.image} alt={row.name} height="30" />
                          <p style={{ color: "gold" }}>{row.name}</p>
                          <p style={{ color: "silver" }}>({row?.symbol})</p>
                        </td>
                        <td>
                          <span>
                            {symbol}{" "}
                            {numberWithCommas(row?.current_price.toFixed(2))}
                          </span>
                        </td>
                        <td
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                          }}
                        >
                          {" "}
                          {profit}%
                        </td>
                        <td style={{ color: "green" }}>
                          {symbol}
                          {numberWithCommas(row?.high_24h.toFixed(2))}
                        </td>
                        <td style={{ color: "red" }}>
                          {symbol}
                          {numberWithCommas(row?.low_24h.toFixed(2))}
                        </td>
                        <td style={{ color: "gold" }}>
                          {symbol}
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}

                        </td>
                        <td style={{ color: "green" }}>
                          {symbol}
                          {numberWithCommas(row.ath)}
                        </td>
                        <td style={{ color: "gold" }}>
                          {symbol}
                          {numberWithCommas(row.total_volume)}
                        </td>

                      </tr>
                    );
                  })}
              </tbody>
            </ReactBootStrap.Table><Pagination
                count={(handleSearch()?.length / 10).toFixed(0)}
                style={{
                  padding: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  color: "white !important" ,
                  fontSize: "50px",
                  backgroundColor:"gold"
                }}
                size="large"
                classes={{ ul: theme.pagination }}
                onChange={(_, value) => {
                  setPage(value);
                  window.scroll(0, 450);
                } } />
              </>
       

      )} 
    </div>
  );
};

export default CoinsTable;
