import illustration from '../assets/illustration-thank-you.svg'
import { RatingContext } from '../Contexts/RatingContext'
import { useContext } from 'react'

export function Thanks() {

  const { rate } = useContext(RatingContext)

  return (
    <section className="container centralized">
      <img src={illustration} alt="cellphone illustration sending feedback to our servers" />
      <p className="container__result">You selected {rate} out of 5.</p>
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </section>
  )
}