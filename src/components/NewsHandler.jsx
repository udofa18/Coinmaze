import React from "react";
import AliceCarousel from "react-alice-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const NewsHandler = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_2164476f3ce27ef6805dfd90c60e9ebdf21ae&q=crypto&language=en "
      )
      .then((res) => setNews(res.data));
  }, []);

  console.log(news.results);
  const items = news.results?.map((newss) => {
    return (
        <Card style={{ width: '20rem', backgroundColor:"gold", padding:"2px"}}>
      <Card.Img variant="top" src={newss.image_url
} />
      <Card.Body style={{backgroundColor:"#303C57"}}>
        <Card.Title style={{color:"gold"}}>{newss.title}</Card.Title>
        <Card.Text>
          {newss.description}
        </Card.Text>
        <a href={newss.link} target="_blank"><Button variant="primary">Read More</Button></a>
      </Card.Body>
    </Card>
    )
   
  });

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 4,
    },
  };
  return (
    <>
      <div style={{borderBottom:"2px solid gold", fontSize:"1.5rem"}}>NEWS UPDATE</div>
      <div style={{padding:"20px", backgroundColor:"#1C1D26",}}>
      <AliceCarousel
        animationType="fadeout"
        mouseTracking
        infinite
        autoPlayInterval={1500}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        fadeOutAnimation={true}
       items={items}
       style={{padding:"10px", margin:"10px", }}
      />
      </div>
    </>
  );
};

export default NewsHandler;
