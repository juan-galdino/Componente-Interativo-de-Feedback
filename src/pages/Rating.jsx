import { RatingBtn } from '../components/RatingBtn'
import iconStar from '../assets/icon-star.svg'

export function Rating() {
  const articleComponents = ['1', '2', '3', '4', '5']

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
      <form action="/thanks">
        <article className="container__buttons">
          {articleComponents.map((component, key) => {
            return <RatingBtn key={key}>{component}</RatingBtn>
          })}
        </article>
        <button className="container__submitButton">SUBMIT</button>
      </form>
    </section>
  )
}