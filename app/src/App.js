import React, { useEffect } from "react";
import "./App.css";
import JSMpeg from "@cycjimmy/jsmpeg-player";

const ffmpegIP = "localhost";

const App = () => {
  useEffect(() => {
    var videoUrl = `ws://${ffmpegIP}:6789/`;
    var player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });
    console.log(player);
  });

  return (
    <div id="body">
      <div
        id="title"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          fontWeight: "bold",
          marginTop: "10px",
          marginBottom: "10px",
          color: "blue",
        }}
      >
        Player stream RTSP
      </div>
      <div id="video-canvas" style={{ height: "480px", width: "640px" }}></div>
    </div>
  );
};

export default App;
