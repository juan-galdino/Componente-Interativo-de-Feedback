import { useState } from 'react'

export function RatingBtn(props) {

  return (
    <input
      type="radio"
      className={'container__ratingBtn'}
      value={props.children}
      name="rate"
      required
    />
  )
}
