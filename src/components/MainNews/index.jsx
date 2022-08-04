import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatDate } from "../../utility/formatDate";
import { useNavigate } from "react-router-dom";

import styles from "./MainNews.module.css";

const MainNews = ({ mainNews }) => {
  let navigate = useNavigate();

  const handleDetail = (category, title, date) => {
    const shortTitle = title.slice(0, 20);

    // console.log(shortQuery);
    // kategory, title, date
    navigate(`detail/${category}/${shortTitle}/${date}`);
  };

  return (
    <>
      <div className={styles.mainNewsWrap}>
        <div className={styles.carouselMainNews}>
          <div
            className={styles.mainNews}
            onClick={() =>
              handleDetail(
                "technology",
                mainNews[0].title,
                mainNews[0].publishedAt
              )
            }
          >
            <img src={mainNews[0].urlToImage} alt="main news" />
            <div className={styles.descMainNews}>
              <h3>{mainNews[0].title}</h3>
              <p>
                By {mainNews[0].author} | {formatDate(mainNews[0].publishedAt)}{" "}
              </p>
            </div>
          </div>
          <div
            className={styles.secondNews}
            onClick={() =>
              handleDetail(
                "technology",
                mainNews[1].title,
                mainNews[1].publishedAt
              )
            }
          >
            <img src={mainNews[1].urlToImage} alt="" />
            <div className={styles.descNews}>
              <h3>{mainNews[1].title}</h3>
              <p>
                By {mainNews[1].author} | {formatDate(mainNews[1].publishedAt)}{" "}
              </p>
            </div>
          </div>
          <div
            className={styles.thirdNews}
            onClick={() =>
              handleDetail(
                "technology",
                mainNews[2].title,
                mainNews[2].publishedAt
              )
            }
          >
            <img src={mainNews[2].urlToImage} alt="" />
            <div className={styles.descNews}>
              <h3>{mainNews[2].title}</h3>
              <p>
                By {mainNews[2].author} | {formatDate(mainNews[2].publishedAt)}{" "}
              </p>
            </div>
          </div>
        </div>

        {/* news 2 */}
        <div className={styles.carouselNews}>
          {mainNews.map((item, index) => {
            if (index > 2 && index < 7) {
              return (
                <div
                  className={styles.newsItem}
                  key={index}
                  onClick={() =>
                    handleDetail(
                      "technology",
                      mainNews[index].title,
                      mainNews[index].publishedAt
                    )
                  }
                >
                  <div className={styles.thumbNews}>
                    <img src={item.urlToImage} alt="" />
                  </div>
                  <div className={styles.descItemNews}>
                    <p className={styles.authorItem}>
                      <span>By {item.author}</span>,{" "}
                      {formatDate(item.publishedAt)}
                    </p>
                    <h2 className={styles.titleItem}>{item.title}</h2>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default MainNews;
