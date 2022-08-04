import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

import profileIcon from "../../assets/logo/profile-icon.jpg";
import downArrow from "../../assets/logo/down-arrow.svg";
import logoNews from "../../assets/logo/logo-news2.svg";
import searchIcon from "../../assets/logo/search.png";

import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, keluarDariAplikasi } from "../../authentication/firebase";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleLogout = () => {
    console.log("logout");
    keluarDariAplikasi();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`search/${search}`);
    }
  };

  const handleSearchText = (e) => {
    setSearch(e.target.value);
  };

  const handleHome = () => {
    navigate("../", { replace: true });
  };

  return (
    <>
      <div className={styles.navbarWrap}>
        <div className={styles.imgLogos} onClick={handleHome}>
          <img src={logoNews} alt="" />
        </div>
        <div>
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Pencarian..."
              value={search}
              onChange={handleSearchText}
            />
            <button type="submit">
              <img src={searchIcon} alt="" />
            </button>
          </form>
        </div>
        <div className={styles.menuNav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>about</li>
            <li>contact</li> */}
            {user ? (
              <li onClick={handleLogout}>logout</li>
            ) : (
              <>
                <li>
                  <Link to="login">login</Link>
                </li>
                <li>
                  <Link to="register">Register</Link>
                </li>
              </>
            )}
          </ul>
          {user && (
            <div className={styles.profileIcon}>
              <p>{user.email}</p>
              <img src={profileIcon} alt="profile-icon" />
              {/* <img
                src={downArrow}
                className={styles.arrowDown}
                alt="arrowDown"
              /> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
