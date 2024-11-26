import React, { useEffect, useState } from "react";
import MainTop from "./components/mainTop/MainTop";
import MainBottom from "./components/mainBottom/mainBottom";
import styles from "./Test1Main.module.scss";
import { deliveryData, freshData } from "./textData/textData";
import { useLocation } from "react-router-dom";

function Test1Main() {
  const location = useLocation();
  const [data, setData] = useState([]);

  const getData = () => {
    if (location.pathname === "/1") {
      setData(freshData);
    } else if (location.pathname === "/2") {
      setData(deliveryData);
    } else {
      setData(null);
    }
  };

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <>
      <MainTop styles={styles} data={data} />
      <MainBottom styles={styles} data={data} />
    </>
  );
}

export default Test1Main;
