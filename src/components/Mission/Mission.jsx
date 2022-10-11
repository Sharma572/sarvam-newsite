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
            <h1 className="mission"> VISION AND MISION</h1>
            <h4>  VISION:</h4>
            <p>
            SARVAM SAFETY is your one stop solution provider for in lifeand industrial safety equipment by 
                    catering to various segments and
            </p>
            <h4>MISION:</h4>
            <p>  SARVAM SAFETY is your one stop solution provider for in lifeand industrial safety equipment by 
                    catering to various segments an</p>
          </div>
        </div>
      </div>
  )
}

export default Mission