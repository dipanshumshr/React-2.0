import { useState } from "react";
import VideoCard from "./UI/Components/VideoCard";
import { videoDetail } from "./Data";

function App() {
  return (
    <div className="video-grid">
      {videoDetail.map((video) => {
        return (
          <VideoCard
            key={Date.now()}
            image={video.image}
            title={video.title}
            views={video.views}
            channel={video.channel}
            channelImg={video.channelImg}
          />
        );
      })}
    </div>
  );
}

export default App;
