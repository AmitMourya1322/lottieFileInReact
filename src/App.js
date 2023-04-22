import React, { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const App = () => {
  const playerRef = useRef(null); // create a ref using useRef

  return (
    <Player
      ref={playerRef} // set the ref to your functional component instance
      autoplay={true}
      loop={true}
      controls={true}
      src="https://assets9.lottiefiles.com/packages/lf20_AWXdcEVDvo.json"
      style={{ height: "300px", width: "300px" }}
    ></Player>
  );
};

export default App;
