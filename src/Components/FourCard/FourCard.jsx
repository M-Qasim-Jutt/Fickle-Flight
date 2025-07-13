import React from 'react'
import './FourCard.css'

const FourCard = (props) => {
  return (
    <div className='FourCard-main'>
      <div className="FourCard-main-top">
        <img src={props.fourImage} alt="" />
      </div>
      <div className="FourCard-main-bot">
        <div className="FourCard-main-bot-side">
            <p id='site'>{props.fourSite}</p>
            <p id='code'>{props.fourCode}</p>
        </div>
        <p id="price">{props.fourPrice}</p>
      </div>
    </div>
  )
}

export default FourCard
