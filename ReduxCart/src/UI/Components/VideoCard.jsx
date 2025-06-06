import React from "react";
import "../Styles/videoCard.css";

function VideoCard({ image, title, channel, views , channelImg}) {
  return (
    <div className="video-preview">
      <div className="img-thumbnail">
        <img className="thumbnail" src={image} />
      </div>
      <div className="video-details">
        <div className="imgContainer">
            <img className="channelImage" src={channelImg}/>
        </div>
        <div className="video-info">
            <p className="title">{title}</p>
            <p className="channel">{channel}</p>
            <p className="views">{views}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
