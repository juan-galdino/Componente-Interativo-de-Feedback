import './scss/App.scss'
import { Rating } from './Components/Rating.jsx'
import { Thanks } from './Components/Thanks.jsx'
import { useState } from 'react'
import { RatingContext } from './Contexts/RatingContext'

function App() {
  const [showThanks, setShowThanks] = useState(false)
  const [rate, setRate] = useState('')

  return (
    <>
      <main>
        <RatingContext.Provider value={{ setShowThanks, rate, setRate }}>
          {showThanks ? <Thanks /> : <Rating />}
        </RatingContext.Provider>
      </main>
      <footer className='attribution'><small>Challenge by <a href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI" target="_blank">Front End Mentor</a>. Coded by <a href="https://github.com/juan-galdino/comecando-com-react" target="_blank">Juan Galdino</a>.</small></footer>
    </>
  )
}

export default App
