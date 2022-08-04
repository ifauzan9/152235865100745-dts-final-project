import React from "react";
import styles from "./LatesPost.module.css";

import facebookIcon from "../../assets/logo/facebook.png";
import youtubeIcon from "../../assets/logo/youtube.png";
import twitterIcon from "../../assets/logo/twitter.png";

import classnames from "classnames";
import { formatDate } from "../../utility/formatDate";
import { useNavigate } from "react-router-dom";

const LatestPost = ({ latestNews }) => {
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
        <div className={styles.news}>
          <div className={styles.topicNews}>
            <h3>Lifestyle</h3>
          </div>
          <div className={styles.listNews}>
            {latestNews.map((news, index) => {
              if (index < 6) {
                return (
                  <div
                    className={styles.newsItem}
                    key={index}
                    onClick={() =>
                      handleDetail("lifestyle", news.title, news.publishedAt)
                    }
                  >
                    <img src={news.urlToImage} alt="" />
                    <div className={styles.descNewsItem}>
                      <p className={styles.author}>
                        {`By ${news.author} | ${formatDate(news.publishedAt)}`}
                      </p>
                      <h3>{news.title}</h3>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* Latest */}
        <div className={styles.latest}>
          <div className={styles.latestTitle}>
            <h3>Latest Post</h3>
          </div>
          <div className={styles.newsLatestList}>
            <div
              className={styles.headlineLatest}
              onClick={() =>
                handleDetail(
                  "lifestyle",
                  latestNews[11].title,
                  latestNews[11].publishedAt
                )
              }
            >
              <img src={latestNews[11].urlToImage} alt="" />
              <div className={styles.descHeadlineLatest}>
                <div className={styles.authorLatest}>
                  <span>{`By ${latestNews[11].author}`}</span>
                  {`| ${formatDate(latestNews[11].publishedAt)}`}
                </div>
                <h3>{latestNews[11].title}</h3>
              </div>
            </div>

            {latestNews.map((news, index) => {
              if (index > 11 && index < 15) {
                return (
                  <div
                    className={styles.newsLatestItem}
                    key={index}
                    onClick={() =>
                      handleDetail("lifestyle", news.title, news.publishedAt)
                    }
                  >
                    <img src={news.urlToImage} alt="" />
                    <div className={styles.descLatestItem}>
                      <div className={styles.authorLatestItem}>
                        <span>{`By ${news.author}`}</span>
                        {`| ${formatDate(news.publishedAt)}`}
                      </div>
                      <h3>{news.title}</h3>
                    </div>
                  </div>
                );
              }
            })}

            <div className={styles.stayConnected}>
              <div className={styles.stayConnectedTitle}>
                <h3>Stay Connected</h3>
              </div>
              <div className={styles.listMediaSocial}>
                <div className={classnames(styles.item, styles.facebook)}>
                  <div className={styles.iconMediaSocial}>
                    <img src={facebookIcon} alt="" />
                  </div>
                  <h4>19,232 Fans</h4>
                  <p className={styles.like}>Like</p>
                </div>
                <div className={classnames(styles.item, styles.twitter)}>
                  <div className={styles.iconMediaSocial}>
                    <img src={twitterIcon} alt="" />
                  </div>
                  <h4>19,232 Fans</h4>
                  <p className={styles.like}>Like</p>
                </div>
                <div className={classnames(styles.item, styles.youtube)}>
                  <div className={styles.iconMediaSocial}>
                    <img src={youtubeIcon} alt="" />
                  </div>
                  <h4>19,232 Fans</h4>
                  <p className={styles.like}>Like</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestPost;
