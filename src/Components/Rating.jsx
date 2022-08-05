import iconStar from '../assets/icon-star.svg'
import { useForm } from "react-hook-form"
import { RatingContext } from '../Contexts/RatingContext'
import { useContext } from 'react'

export function Rating() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { setShowThanks, setRate } = useContext(RatingContext)
  const inputValues = ['1', '2', '3', '4', '5']

  function goToThanks() {
    setShowThanks(true)
  }

  return (
    <section className="container">
      <i className="container__star">
        <img src={iconStar} alt="icon star" />
      </i>
      <h1>How did we do?</h1>
      <p>
        Pleese let us know how we did with your support request. All feedback
        is appreciated to help us improve our offering!
      </p>

      <form onSubmit={handleSubmit((data) => {
        setRate(data.formRate)
        goToThanks()
      })}>
        <article className="container__buttons">
          {inputValues.map((values, key) => {
            return (
              <input
                type="radio"
                className={'container__ratingBtn'}
                value={values}
                key={key}
                {...register('formRate', { required: 'Rate our support on a scale of 1 to 5 to submit.' })}
              />)
          })}
        </article>
        <button className="container__submitButton">SUBMIT</button>
        <p className="container__error">{errors.formRate?.message}</p>
      </form>
    </section>
  )
}