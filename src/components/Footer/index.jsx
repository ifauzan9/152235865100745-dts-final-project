import React from "react";
import styles from "./Footer.module.css";

import logoNews from "../../assets/logo/logo-news2.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menuFooter}>
          <ul>
            <li>Global Economy</li>
            <li>Religion</li>
            <li>Bitcoin</li>
            <li>Conflict</li>
          </ul>
          <ul>
            <li>Celebity News</li>
            <li>Movies</li>
            <li>Tv News</li>
            <li>Music News</li>
          </ul>
          <ul>
            <li>Medical Research</li>
            <li>Healthy Living</li>
            <li>Mental Health</li>
            <li>Virus Corona</li>
          </ul>
          <ul>
            <li>Markets</li>
            <li>Technology</li>
            <li>Features</li>
            <li>Property</li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <div className={styles.logo}>
            <img src={logoNews} alt="" />
          </div>
          <div className={styles.names}>
            152235865100-745 Muhammad Ilham Fauzan
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
