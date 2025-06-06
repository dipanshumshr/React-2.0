import React , { useState , useEffect, useRef } from "react";
import { messages } from "../Data/Chat";

function ChatlistScroll()
{
  const [messageList, setMessageList] = useState([])
  const [upperlimit, setUpperlimit] = useState(20)
  const containerRef = useRef(null);

  useEffect(()=>{
    const messagesCut = messages.slice(0,upperlimit);
    setMessageList(messagesCut);
  },[upperlimit])

  function handleScroll()
  {
    const container = containerRef.current
    if(!container)
      return


    const { scrollTop , scrollHeight , clientHeight} = container

    if(scrollHeight - scrollTop <= clientHeight+1)
    {
      if(upperlimit<messages.length)
      {
        setUpperlimit(prev => Math.min(prev+10, messages.length))
      }
    }
  }

  useEffect(()=>{
    const container = containerRef.current;

    if(container)
    {
      container.addEventListener("scroll", handleScroll);
    }

    return ()=>{
      if(container)
      {
        container.removeEventListener("scroll", handleScroll)
      }
    }
    
  },[upperlimit])
 
    return <div
    ref={containerRef}
    style={{
      height:"300px",
      overflowY : "auto",
      border : "1px solid #ccc",
      padding : "10px",
      margin : "20px"
    }}
    >
      <ul>
        {messageList.map((value)=>{
          return  <li key={value.id}>
          <strong>id:</strong> {value.id} | <strong>sender:</strong> {value.sender} |{" "}
          <strong>message:</strong> {value.message}
        </li>
        })}
      </ul>

    {upperlimit < messages.length && ( <p style={{ textAlign: "center", padding: "10px" }}> Loading more ... </p>)}
    </div>
}

export default ChatlistScroll;