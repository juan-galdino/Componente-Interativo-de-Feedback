import './scss/App.scss'
import { AppRoutes } from './AppRoutes';
import { RatingBtn } from './components/RatingBtn'
import iconStar from './assets/icon-star.svg';


function App() {

  console.log('renderizou')
  return (
    <>
      <AppRoutes />
      <section className='container'>
        <i className='container__star'><img src={iconStar} alt="icon star" /></i>
        <h1>How did we do?</h1>
        <p>Pleese let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <article className='container__buttons'>
          <RatingBtn>1</RatingBtn>
          <RatingBtn>2</RatingBtn>
          <RatingBtn>3</RatingBtn>
          <RatingBtn>4</RatingBtn>
          <RatingBtn>5</RatingBtn>
        </article>
        <button className='container__submitButton'>SUBMIT</button>
      </section>
    </>
  )
}

export default App
