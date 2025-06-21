import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import "./App.css";
import Tweet from "./Tweet";

function App() {
  const [tweets, setTweets] = useState([]);

  function AddTweet(content) {
    setTweets((prev) => {
      const currentTime = new Date();
    const localTime = currentTime.toLocaleTimeString();
    
      const newTweet = {
        id: nanoid(15),
        content: content,
        time : localTime 
      };

     const updateTweetList = [newTweet, ...prev];
      return updateTweetList;
    });
  }

  function clearAllTweets()
  {
    setTweets([])
  }

  return (
    <>
      <Tweet onAdd = {AddTweet}/>
      <ul>
        {tweets.map(tweet=>
          <li key={tweet.id}>{tweet.content} <strong>{tweet.time}</strong></li>
        )}
      </ul>
      <button onClick={clearAllTweets}>Clear</button>
    </>
  );
}

export default App;
