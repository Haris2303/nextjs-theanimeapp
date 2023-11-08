"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const options = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <button
          className="text-color-primary float-right"
          onClick={handleVideoPlayer}
        >
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
        />
      </div>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <button
      className="fixed bottom-0 right-0 bg-color-primary px-4"
      onClick={handleVideoPlayer}
    >
      Open Trailer
    </button>
  );
};

export default VideoPlayer;
