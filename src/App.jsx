import './scss/App.scss'
import { Rating } from './Components/Rating.jsx'
import { Thanks } from './Components/Thanks.jsx'
import { useState } from 'react'
import { RatingContext } from './Contexts/RatingContext'

function App() {
  const [showThanks, setShowThanks] = useState(false)
  const [rate, setRate] = useState('')

  return (
    <div>
      <RatingContext.Provider value={{ setShowThanks, rate, setRate }}>
        {showThanks ? <Thanks /> : <Rating />}
      </RatingContext.Provider>
    </div>
  )
}

export default App
