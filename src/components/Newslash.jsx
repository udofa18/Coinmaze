import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/newsflsah.css";
import "../components/newsConfg";

const NewsFlash = () => {
  const [news, setNews] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_2164476f3ce27ef6805dfd90c60e9ebdf21ae&q=crypto&language=en "
      )
      .then((res) => setNews(res.data));
  }, []);

  console.log(news);

  return (
    <>
      <div className="breaking-news">
        <div className="wrapper">
          <strong className="br-title">News Update:</strong>
          <div className="br-article-list">
            <div className="br-article-list-inner">
              {news &&
                news.results.map((news) => (
                  <div className="br-article">
                    <a href={news.link} target="_blank">
                      {news.pubDate}
                      <strong>{news.title}</strong>
                      <span style={{padding:"5px", color:"white", backgroundColor:"red", borderRadius:"10px", margin:"5px", textTransform:"uppercase"}}>{news.source_id}</span>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsFlash;
