import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utility/formatDate";
import styles from "./Sports.module.css";

const Sports = ({ sportsNews }) => {
  let navigate = useNavigate();

  const handleDetail = (category, title, date) => {
    const shortTitle = title.slice(0, 20);

    // console.log(shortQuery);
    // kategory, title, date
    navigate(`detail/${category}/${shortTitle}/${date}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Sports</h3>
      </div>
      <div className={styles.listSports}>
        {sportsNews.map((news, index) => {
          if (index < 4) {
            return (
              <div
                className={styles.newsSport}
                key={index}
                onClick={() =>
                  handleDetail("sports", news.title, news.publishedAt)
                }
              >
                <img src={news.urlToImage} alt="" />
                <div className={styles.descSport}>
                  <div className={styles.author}>
                    <span>{news.author}</span> | {formatDate(news.publishedAt)}
                  </div>
                  <h3 className={styles.titleSport}>{news.title}</h3>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sports;
