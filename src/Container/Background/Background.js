import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import Styles from "./Background.module.css";

const Background = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x7192f,
          color1: 0xff0000,
          color2: 0x2dafcd,
          colorMode: "variance",
          birdSize: 1.1,
          speedLimit: 7.0,
          separation: 33.0,
          alignment: 35.0,
          cohesion: 32.0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className={Styles.Background} ref={myRef}>
      {props.children}
    </div>
  );
};
export default Background;
