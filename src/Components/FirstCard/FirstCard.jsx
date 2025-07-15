import React from 'react'
import './FirstCard.css'

const FirstCard = (props) => {
  return (
    <div className='first-card-main'>
      <div className="first-card-main-top">
        <p>{props.leftText}</p>
        <img src="/Images/Duration.png" alt="" />
        <p>{props.rightText}</p>
      </div>
      <p>
        <span id='first-card-span-Bold'>Depart on: </span>
        <span id='first-card-span-normal'>{props.dateText}</span>
      </p>
    </div>
  )
}

export default FirstCard
