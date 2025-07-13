import React from 'react'
import './SecCard.css'

const SecCard = (props) => {
  return (
    <div className='sec-card-main'>
      {/* <img src="/src/assets/Images/icons/Hotel-Icon.png" alt="" /> */}
      <img src={props.image} alt="" />
      <p>{props.text}</p>
    </div>
  )
}

export default SecCard
