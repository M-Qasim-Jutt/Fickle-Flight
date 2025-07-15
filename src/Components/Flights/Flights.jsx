import React from 'react'
import './Flights.css'
import FirstCard from '../FirstCard/FirstCard'
import SecCard from '../SecCard/SecCard'

const Flights = () => {
  const DataLists = [
    {
      id : 1,
      image : '/Images/icons/Hotel-Icon.png',
      text : 'Hotel'
    },
    {
      id : 2,
      image : '/Images/icons/Attractions-Icon.png',
      text : 'Attractions'
    },
    {
      id : 3,
      image : '/Images/icons/Commute-icon.png',
      text : 'Commute'
    },
    {
      id : 4,
      image : '/Images/icons/Eats-Icon.png',
      text : 'Eats'
    },
    {
      id : 5,
      image : '/Images/icons/Taxi-Icon.png',
      text : 'Taxi'
    },
    {
      id : 6,
      image : '/Images/icons/Movies-icon.png',
      text : 'Movies'
    }
  ]
  return (
    <div className='flights-main'>
      <div className="flights-container">
        <p>RECENT SEARCHES</p>
        <div className="flights-container-top">
                <FirstCard
                leftText = 'SIN'
                rightText = 'LAX'
                dateText = '26 Apr 2025'
                />
                <FirstCard
                leftText = 'MY'
                rightText = 'LAB'
                dateText = '30 Apr 2025'
                />
        </div>
        <br />
        <span>PREPARE FOR YOUR TRIP</span>
        <div className="flights-container-bot">
          {DataLists.map((item)=>(
            <SecCard
            key={item.id}
            image = {item.image}
            text = {item.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Flights
