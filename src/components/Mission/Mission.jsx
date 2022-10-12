import React from 'react';
import './Mission.css';
import youtube from '../../assets/img/youtube/youtube.png'

const Mission = () => {
  return (
    <div className="card_style">
        <div className="shy">
          <div className="imgStyle">
           <a href='https://www.youtube.com/watch?v=YoXTO60j91g' target='blank'>
           <img src={youtube} alt="img of youtube" />
            </a>
          </div>
          <div className="card-content">
            <h1 className="mission"> VISION AND MISSION</h1>
            <h4>VISION:</h4>
            <p>
            Sarvam's Vision is to be a one-stop solution provider in life and industrial safety equipment by catering to various segments and.
            </p>
            <h4>MISSION:</h4>
            <p>Sarvam's mission is to provide solutions for all safety needs be delivering quality service with high customer satisfaction and ensuring every people's safety at work.</p>
          </div>
        </div>
      </div>
  )
}

export default Mission