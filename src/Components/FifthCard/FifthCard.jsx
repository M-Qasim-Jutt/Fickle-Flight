import React from 'react'
import './FifthCard.css'

const FifthCard = (props) => {
  return (
    <div className='fifth-card-main'>
      <div className="fifth-card-main-top">
        <img src={props.topImage} alt="" />
      </div>
      <div className="fifth-card-main-bot">
        <div className="fifth-card-main-bot-one">
            <div className="fifth-card-main-bot-one-top">
                <p id='top-para'>{props.topPara}</p>
                <img src="/assets/Images/icons/video.png" alt="" />
            </div>
            <p id="top-bold">{props.topBold}</p>
            <p id="top-light">{props.topLight}</p>
        </div>
        <div className="fifth-card-main-bot-two">
            <img src="/assets/Images/icons/Vector.png" alt="" />
            <p id='center-review'>{props.centerReview}</p>
            <span id='review-quantity'>{props.reviewQuantity}</span> 
        </div>
        <div className="fifth-card-main-bot-three">
            <p>MORE DETAILS</p>
        </div>
      </div>
    </div>
  )
}

export default FifthCard
