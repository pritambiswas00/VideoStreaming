import React from "react";
import Styles from "./HOC.module.css";
import Background from "../../Container/Background/Background";
import Header from "../../Container/Header/Header";

const HOC = (props) => {
  return (
    <div className={Styles.wrapper}>
      <Header />
      <Background>{props.children}</Background>
    </div>
  );
};

export default HOC;
