import { messages } from '../Data/Chat';
import React, { useLayoutEffect, useState } from 'react';

function Chats() {
  const [messageList, setMessageList] = useState([]);
  const [upperlimit, setUpperlimit] = useState(10);
  const [lowerlimit, setLowerlimit] = useState(0);

  useLayoutEffect(() => {
    const messageCut = messages.slice(lowerlimit, upperlimit);
    setMessageList(messageCut);
    console.log(messageCut);
  }, [lowerlimit, upperlimit]);

  const handleBack = () => {
    setLowerlimit((prev) => Math.max(prev - 10, 0));
    setUpperlimit((prev) => Math.max(prev - 10, 10));
  };

  const handleForward = () => {
    setLowerlimit((prev) => Math.min(prev + 10, messages.length));
    setUpperlimit((prev) => Math.min(prev + 10, messages.length + 10));
  };

  return (
    <div>
      <div>
        <ul>
          {messageList.map((value) => {
            return (
              <li key={value.id}>
                id : {value.id} message : {value.message} sender :{' '}
                {value.sender}
              </li>
            );
          })}
        </ul>
      </div>
      <button disabled={lowerlimit === 0} onClick={handleBack}>
        Move back
      </button>
      <button disabled={upperlimit === 100} onClick={handleForward}>
        Load more
      </button>
    </div>
  );
}

export default Chats;
  