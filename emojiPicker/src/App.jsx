import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const emojiList = ["🥳", "😎", "😢", "💡", "🔥", "🎉", "🚀", "💻", "🧠", "🍕"];

function App() {
  
  const [favoriteEmoji , setFavoriteEmoji] = useState([])

  function handleEmoji(emoji)
  {
    if (favoriteEmoji.includes(emoji)) return;
    setFavoriteEmoji(prev => [...prev , emoji])
  }

  function handleDelete(emoji)
  {
    setFavoriteEmoji(prev => prev.filter(val=> val !== emoji))
  }

  return (
    <>
      <div>
        {emojiList.map(emoji => (
          <div key={emoji} onClick={() => handleEmoji(emoji)}> {emoji} </div>
        ))}
      </div>

      <div>
          {favoriteEmoji.length ? favoriteEmoji.map(val => (
            <div key={val}>
              {val}
              <button onClick={() => handleDelete(val)}> Delete</button>
            </div>
          )): <p>Nothing selected</p>}
      </div>
    </>
  )
}

export default App
