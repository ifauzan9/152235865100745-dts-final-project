import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utility/formatDate";
import styles from "./RecentPopular.module.css";

const RecentPopular = ({ recentPopular }) => {
  let navigate = useNavigate();

  const handleDetail = (category, title, date) => {
    const shortTitle = title.slice(0, 20);

    // console.log(shortQuery);
    // kategory, title, date
    navigate(`detail/${category}/${shortTitle}/${date}`);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.recentWrap}>
          <div className={styles.titleRecentWrap}>
            <h2>Recent Post</h2>
          </div>

          {/* Recent News */}
          <div className={styles.recentNewsWrap}>
            <div className={styles.leftRecent}>
              <div
                className={styles.headlineLeft}
                onClick={() =>
                  handleDetail(
                    "recent",
                    recentPopular[0].title,
                    recentPopular[0].publishedAt
                  )
                }
              >
                <img src={recentPopular[0].urlToImage} alt="" />
                <div className={styles.descHeadLineLeft}>
                  <h3>{recentPopular[0].title}</h3>
                  <p>By David Hall | December 09, 2020</p>
                  <p>{`By ${recentPopular[0].author} | ${formatDate(
                    recentPopular[0].publishedAt
                  )}`}</p>
                </div>
              </div>
              {recentPopular.map((news, index) => {
                if (index == 2 || index == 3) {
                  return (
                    <div
                      className={styles.newsLeft}
                      key={index}
                      onClick={() =>
                        handleDetail("recent", news.title, news.publishedAt)
                      }
                    >
                      <img src={news.urlToImage} alt="" />
                      <div className={styles.descNews}>
                        <p>{`By ${news.author} | ${formatDate(
                          news.publishedAt
                        )}`}</p>
                        <h4>{news.title}</h4>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className={styles.rightRecent}>
              <div
                className={styles.headlineLeft}
                onClick={() =>
                  handleDetail(
                    "recent",
                    recentPopular[4].title,
                    recentPopular[4].publishedAt
                  )
                }
              >
                <img src={recentPopular[4].urlToImage} alt="" />
                <div className={styles.descHeadLineLeft}>
                  <h3>{recentPopular[4].title}</h3>
                  <p>By David Hall | December 09, 2020</p>
                  <p>{`By ${recentPopular[4].author} | ${formatDate(
                    recentPopular[4].publishedAt
                  )}`}</p>
                </div>
              </div>
              {recentPopular.map((news, index) => {
                if (index == 5 || index == 6) {
                  return (
                    <div
                      className={styles.newsLeft}
                      key={index}
                      onClick={() =>
                        handleDetail("recent", news.title, news.publishedAt)
                      }
                    >
                      <img src={news.urlToImage} alt="" />
                      <div className={styles.descNews}>
                        <p>{`By ${news.author} | ${formatDate(
                          news.publishedAt
                        )}`}</p>
                        <h4>{news.title}</h4>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        {/* Popular Post */}
        <div className={styles.popularWrap}>
          <div className={styles.titlePopular}>
            <h2>Popular Post</h2>
          </div>
          <div className={styles.listItemPopular}>
            {recentPopular.map((news, index) => {
              if (index >= 10 && index <= 14) {
                return (
                  <div
                    className={styles.itemPopular}
                    key={index}
                    onClick={() =>
                      handleDetail("recent", news.title, news.publishedAt)
                    }
                  >
                    <div className={styles.number}>{index - 9}</div>
                    <h3>{news.title}</h3>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPopular;
