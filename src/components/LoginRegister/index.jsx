import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../../authentication/firebase";
import styles from "./Login.module.css";

import { useAuthState } from "react-firebase-hooks/auth";

const LoginRegister = ({ status }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return;
    }

    console.log(user);

    if (user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  const changeLink = () => {
    if (status == "login") {
      setInput({
        email: "",
        password: "",
      });
      navigate("../register", { replace: true });
    } else {
      setInput({
        email: "",
        password: "",
      });
      navigate("../login", { replace: true });
    }
  };

  const handleInput = (e) => {
    const copyInput = { ...input };
    copyInput[e.target.id] = e.target.value;
    setInput(copyInput);
  };

  const handleLoginRegister = (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      console.log("isi dengan lengkap");
      return;
    }

    if (status == "login") {
      console.log("login");
      loginDenganEmailDanPassword(input);
      setInput({
        email: "",
        password: "",
      });
    }

    if (status == "register") {
      console.log("register");
      registerDenganEmailDanPassword(input);
      setInput({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formWrap}>
          <img src="" alt="" />
          <h1 className={styles.title}>
            {status == "login" ? "Login" : "Register"}
          </h1>
          <form className={styles.form} onSubmit={handleLoginRegister}>
            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                onChange={handleInput}
                value={input.email}
              />
            </div>
            <div className={styles.password}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={handleInput}
                value={input.password}
              />
            </div>
            <div className={styles.button}>
              <button type="submit">
                {status == "login" ? "Login" : "Register"}
              </button>
            </div>
          </form>
          <div className={styles.link} onClick={changeLink}>
            {status == "login" ? "To Register Page" : "To Login Page"}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
