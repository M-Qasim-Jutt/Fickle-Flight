import React from 'react'
import './Destinations.css'
import ThirdCard from '../ThirdCard/ThirdCard'
import FourCard from '../FourCard/FourCard'
import FifthCard from '../FifthCard/FifthCard'


const Destinations = () => {

  const FifthCardData = [
    {
      id : 1,
      topImage : '/Images/hotels/Matterhorn-Suites-Image.png',
      topPara : 'Entire bungalow',
      topBold : 'Matterhorn Suites',
      topLight : '$575/night',
      centerReview : '4.9',
      reviewQuantity : '(60 reviews)'
    },
    {
      id : 2,
      topImage : '/Images/hotels/Discovery-Shores-Image.png',
      topPara : '2-Story beachfront suite',
      topBold : 'Discovery Shores',
      topLight : '$360/night',
      centerReview : '4.8',
      reviewQuantity : '(116 reviews)'
    },
    {
      id : 3,
      topImage : '/Images/hotels/Arctic-Hut-Image.png',
      topPara : 'Single deluxe hut',
      topBold : 'Arctic Hut',
      topLight : '$420/night',
      centerReview : '4.7',
      reviewQuantity : '(78 reviews)'
    },
    {
      id : 4,
      topImage : '/Images/hotels/Lake-Louise-Image.png',
      topPara : 'Deluxe King Room',
      topBold : 'Lake Louise Inn',
      topLight : '$244/night',
      centerReview : '4.6',
      reviewQuantity : '(63 reviews)'
    },
  ]

  const FourCardData = [
    {
      id : 1,
      fourImage : '/Images/sites/unsplash_5MV818tzxeo.png',
      fourSite : 'Bali',
      fourCode : '4D3N',
      fourPrice : '$899'
    },
    {
      id : 2,
      fourImage : '/Images/sites/SwitzerlandImage.png',
      fourSite : 'Bali',
      fourCode : '6D5N',
      fourPrice : '$799'
    },
    {
      id : 3,
      fourImage : '/Images/sites/BoracayImage.png',
      fourSite : 'Boracay',
      fourCode : '5D4N',
      fourPrice : '$1399'
    },
    {
      id : 4,
      fourImage : '/Images/sites/PalawanImage.png',
      fourSite : 'Palawan',
      fourCode : '7D5N',
      fourPrice : '$1899'
    },
  ] 

  const citiesCards = [
  {
    id : 1,
    image : '/Images/cities/ParisImage.png',
    city : 'Paris',
    price : '$699'
  },
  {
    id : 2,
    image : '/Images/cities/GreeceImage.png',
    city : 'Greece',
    price : '$1079'
  },
  {
    id : 3,
    image : '/Images/cities/NorwayImage.png',
    city : 'Norway',
    price : '$895'
  },
  {
    id : 4,
    image : '/Images/cities/TuscanyImage.png',
    city : 'Tuscany',
    price : '$1245'
  }
  ]
  return (
    <div className='destinations-main'>
      <div className="destinations-container">
        <div className="destinations-container-one">
            <div className="destinations-container-one-top"></div>
            <div className="destinations-container-one-bot">
                {citiesCards.map((item)=>(
                  <ThirdCard
                  key = {item.id}
                  image = {item.image}
                  city = {item.city}
                  price = {item.price}
                  />
                ))}
            </div>
        </div>
        <div className="destinations-container-two">
          <div className="destinations-container-two-top">
            <p id='recomended'>Recomended</p>
            <p id='view'>View</p>
          </div>
          <div className="destinations-container-two-bot">
            {/* fourth card props file put here */}
            {/* <FourCard/> */}
            {FourCardData.map((item)=>(
              <FourCard
              key={item.id}
              fourImage = {item.fourImage}
              fourSite = {item.fourSite}
              fourCode = {item.fourCode}
              fourPrice = {item.fourPrice}
              reviewQuantity = {item.reviewQuantity}
              />
            ))}
          </div>
        </div>
        <div className="destinations-container-three">
          <div className="destinations-container-three-top"></div>
          <div className="destinations-container-three-bot">
            {/* next card component placed here */}
            {/* <FifthCard/> */}
            {FifthCardData.map((item)=>(
              <FifthCard
              key = {item.id}
              topImage = {item.topImage}
              topPara = {item.topPara}
              topBold = {item.topBold}
              topLight = {item.topLight}
              centerReview = {item.centerReview}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations
