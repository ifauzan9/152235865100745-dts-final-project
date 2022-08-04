import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { filterNews } from "../../utility/filterNews";
import { formatDate } from "../../utility/formatDate";
import styles from "./SearchResult.module.css";

const SearchResult = () => {
  const [news, setNews] = useState([]);
  let { query } = useParams();

  let navigate = useNavigate();

  //   status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(query);
    const getData = async () => {
      try {
        const getAllData = await axios.get(
          "https://apinews-48315-default-rtdb.asia-southeast1.firebasedatabase.app/all.json"
        );

        const filterNews = getAllData.data.filter((item, index) => {
          if (item.title.toLowerCase().includes(query.toLowerCase())) {
            return item;
          }
        });

        // console.log(filterNews.slice(0, 2));
        setNews(filterNews.slice(0, 10));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getData();
  }, [query]);

  const handleDetail = (title, date) => {
    const shortTitle = title.slice(0, 20);
    navigate(`../detail/all/${shortTitle}/${date}`, { replace: true });
  };

  console.log(news);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className={styles.container}>
          <div className={styles.searchWrap}>
            <h1>Search Results</h1>
            <div className={styles.listSearch}>
              {news.map((item, index) => {
                return (
                  <div className={styles.news} key={index}>
                    <img src={item.urlToImage} alt="" />
                    <div className={styles.contentNews}>
                      <p>{`By ${item.author} | ${formatDate(
                        item.publishedAt
                      )}`}</p>
                      <h3
                        onClick={() =>
                          handleDetail(item.title, item.publishedAt)
                        }
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResult;
