import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import axios from "axios";

import facebookIcon from "../../assets/logo/facebook.png";
import twitterIcon from "../../assets/logo/twitter.png";
import youtubeIcon from "../../assets/logo/youtube.png";
import telegramIcon from "../../assets/logo/telegram.png";
import whatsappIcon from "../../assets/logo/whatsapp.png";
import tagNews from "../../assets/logo/tag.png";
import photoProfile from "../../assets/logo/profile-icon.jpg";

import classnames from "classnames";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utility/formatDate";
import Loading from "../../components/Loading";

const Detail = () => {
  const { category, title, date } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState({});
  //   console.log(query, date);
  useEffect(() => {
    const getNewsDetail = async () => {
      setLoading(true);
      setError(false);
      try {
        const datas = await axios.get(
          `https://apinews-48315-default-rtdb.asia-southeast1.firebasedatabase.app/${category}.json`
        );

        const articles = datas.data;

        const filter = articles.find((data) => {
          if (data.publishedAt == date) {
            if (data.title.toLowerCase().includes(title.toLowerCase())) {
              return data;
            }
          }
        });

        filter ? setError(false) : setError(true);
        setLoading(false);
        setNews(filter);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    getNewsDetail();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && !loading && (
        <div style={{ marginTop: "100px" }}>404 Not Found</div>
      )}
      {!loading && !error && (
        <>
          <div className={styles.container}>
            <h1 className={styles.titleDetail}>{news.title}</h1>
            <div className={styles.contentDetail}>
              <div className={styles.author}>
                By <span className={styles.nameAuthor}>{news.author}</span>{" "}
                <span className={styles.date}>
                  {formatDate(news.publishedAt)}
                </span>
              </div>
              <img src={news.urlToImage} alt="" className={styles.imageNews} />
              <div className={styles.mediaSocial}>
                <div className={styles.views}>
                  <h3>15.k Views</h3>
                </div>
                <div className={styles.listMediaSocial}>
                  <div className={classnames(styles.icon, styles.facebook)}>
                    <img src={facebookIcon} alt="" />
                    <h3>Facebook</h3>
                  </div>
                  <div className={classnames(styles.icon, styles.twitter)}>
                    <img src={twitterIcon} alt="" />
                    <h3>Twitter</h3>
                  </div>
                  <div className={classnames(styles.icon, styles.whatsapp)}>
                    <img src={whatsappIcon} alt="" />
                    <h3>Whatsapp</h3>
                  </div>
                  <div className={classnames(styles.icon, styles.telegram)}>
                    <img src={telegramIcon} alt="" />
                    <h3>Telegram</h3>
                  </div>
                  <div className={classnames(styles.icon, styles.youtube)}>
                    <img src={youtubeIcon} alt="" />
                    <h3>Youtube</h3>
                  </div>
                </div>
              </div>

              <div className={styles.contextNews}>
                <p className={styles.textContext}>{news.content}</p>
                <div className={styles.tagNews}>
                  <img src={tagNews} alt="" />
                  <div className={styles.itemTag}>#technology</div>
                  <div className={styles.itemTag}>#games</div>
                  <div className={styles.itemTag}>#art</div>
                  <div className={styles.itemTag}>#mobile</div>
                  <div className={styles.itemTag}>#computer</div>
                </div>
              </div>

              {/* author */}
              <div className={styles.authorInfo}>
                <div className={styles.authorImage}>
                  <img src={photoProfile} alt="" />
                </div>
                <div className={styles.authorContext}>
                  <h3 className={styles.titleAuthor}>Author</h3>
                  <h2 className={styles.authorFullName}>{news.author}</h2>
                  <p className={styles.authorSay}>
                    A professionally journalism, author has spent the last
                    decade reading and writing romance novels giving her
                    characters a palpable spark! Her latest work is the sequel
                    to her debut novel, In the Arms of a Stranger.
                  </p>
                  <div className={styles.authorMediaSocial}>
                    <div
                      className={classnames(
                        styles.itemAuthorMediaSocial,
                        styles.facebook
                      )}
                    >
                      <img src={facebookIcon} alt="" />
                    </div>
                    <div
                      className={classnames(
                        styles.itemAuthorMediaSocial,
                        styles.twitter
                      )}
                    >
                      <img src={twitterIcon} alt="" />
                    </div>
                    <div
                      className={classnames(
                        styles.itemAuthorMediaSocial,
                        styles.telegram
                      )}
                    >
                      <img src={telegramIcon} alt="" />
                    </div>
                    <div
                      className={classnames(
                        styles.itemAuthorMediaSocial,
                        styles.whatsapp
                      )}
                    >
                      <img src={whatsappIcon} alt="" />
                    </div>
                    <div
                      className={classnames(
                        styles.itemAuthorMediaSocial,
                        styles.youtube
                      )}
                    >
                      <img src={youtubeIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment */}
              <div className={styles.commentSection}></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
