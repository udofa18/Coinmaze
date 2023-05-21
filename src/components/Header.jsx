import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import Homepage from "../pages/Homepage";
import "@fortawesome/fontawesome-free/css/all.css";
// import CryptoContext from "../CryptoContext";
import "./header.css";

const Header = () => {
  const { currency, setCurrency } = CryptoState();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#1A1C26",
        borderBottom: "1px solid gold",
        margin: "0 auto",
        alignItems: "center",
        gap: "3rem",
        textAlign: "center",
      }}
    >
      <div className="mobile">
        <div>
          <h1 style={{}}>
            <i className="fas fa-coins"></i>
            Coin<span style={{ color: "gold" }}>Maze</span>
          </h1>
        </div>
        <div className="" style={{ width: "50%", marginLeft:"90px" }}>
          <nav>
            <ul className="mobile1"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                textAlign: "center",
                listStyle: "none",
              }}
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="#">Products</NavLink>
              </li>
              <li>
                <NavLink to="#">Exchanges</NavLink>
              </li>
              <li>
                <NavLink to="#">NFTs</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Form.Select
          aria-label="Currency select"
          value={currency}
          style={{
            width: "5rem",
            height: "43px",
            backgroundColor: "#303C57",
            color: "gold",
            padding: "6px",
            border: "none",
            marginLeft:"90px"
          }}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">$ USD</option>
          <option value="INR">₹ INR</option>
        </Form.Select>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            textAlign: "center",
            color: "gold",
            marginLeft:"90px"
          }}
        >
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-reddit-alien"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
