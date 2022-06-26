import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'
import colors from './colors'

function App() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const [item, setItem] = useState(randomIndex)

  const random = ()=> {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setItem(randomIndex);
  }

  const randomColorIndex = Math.floor(Math.random() * colors.length)
  const color = colors[randomColorIndex]

  document.body.style = `background: ${color}`
  return (
    <div className="App">
      <div className='card' style={{color: color}}>
        <h3 className='phrase'><i class="fa-solid fa-quote-left icon"></i>{quotes[item].quote}</h3>
        <h4 className='author'>~{quotes[item].author}</h4>
        <button onClick={random} className=' button'><i className="fa-solid fa-shuffle"></i></button>
      </div>
    </div>
  )
}
export default App;

