import React from 'react'
import './HeroPage.css'

const HeroPage = () => {
  return (
    <div className='hero-main'>
      <img src="/Images/BannerBackground.png" alt="" />
      <div className="hero-center">
        <div className="hero-center-top">
          <h1>Let’s explore & travel the world</h1>
          <p>Find the best destinations and the most popular stays!</p>
        </div>
        <div className="hero-center-bot">
          <div className="hero-center-bot-top">
            <p>SEARCH FLIGHTS</p>
            <div className="hero-center-bot-top-side">
              <input type="radio" name='select'/> Return  &nbsp; &nbsp;<input type="radio" name='select'/> One-way
            </div>
          </div>
          <div className="hero-center-bot-bot">
            <div className="hero-center-bot-bot-box1">
              <p>Singapore (SIN)</p> <span>Departure</span>
            </div>
            <div className="hero-center-bot-bot-box1">
            <p>Los Angeles (LA)</p> <span>Arival</span>
            </div>
            <div className="hero-center-bot-bot-box1">
            <p>04/26/2025</p> <span>Date</span>
            </div>
            <button>SEARCH FLIGHTS</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
