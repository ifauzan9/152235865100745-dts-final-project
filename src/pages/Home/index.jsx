import React, { useState, useEffect } from "react";
import LatestPost from "../../components/LatestPost";
import MainNews from "../../components/MainNews";
import RecentPopular from "../../components/RecentPopular";
import Sports from "../../components/Sports";
import axios from "axios";
import { filterNews } from "../../utility/filterNews";
import { getNews } from "../../services/newsAPI";
import { getData } from "../../newsApi/readDb";
import Loading from "../../components/Loading";

const Home = () => {
  const [mainNews, setMainNews] = useState([]);
  const [recentPopular, setRecentPopular] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  // status
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // getMainNews
  useEffect(() => {
    const getDataNews = async () => {
      setLoading(true);
      setError(false);
      try {
        const getDataHeadline = await axios.get(
          "https://apinews-48315-default-rtdb.asia-southeast1.firebasedatabase.app/technology.json"
        );

        const getRecentPopular = await axios.get(
          "https://apinews-48315-default-rtdb.asia-southeast1.firebasedatabase.app/recent.json"
        );

        const getSportsNews = await axios.get(
          "https://apinews-48315-default-rtdb.asia-southeast1.firebasedatabase.app/sports.json"
        );

        const getLatestNews = await axios.get(
          "https://apinews-48315-default-rtdb.asia-southeast1.firebasedatabase.app/lifestyle.json"
        );

        setLatestNews(filterNews(getLatestNews.data, 15));
        setMainNews(filterNews(getDataHeadline.data, 7));
        setRecentPopular(filterNews(getRecentPopular.data, 15));
        setSportsNews(filterNews(getSportsNews.data, 8));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };

    getDataNews();
  }, []);

  return (
    <>
      {loading && <Loading />}

      {!loading && !error && (
        <>
          <MainNews mainNews={mainNews} />
          <RecentPopular recentPopular={recentPopular} />
          <Sports sportsNews={sportsNews} />
          <LatestPost latestNews={latestNews} />
        </>
      )}
    </>
  );
};

export default Home;
