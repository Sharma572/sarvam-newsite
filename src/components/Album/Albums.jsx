import React from "react";
import "./Album.css";
import safety from '../../assets/img/peoplebehingscene/1.PNG';
import safety1 from '../../assets/img/peoplebehingscene/2.PNG';
import safety2 from '../../assets/img/peoplebehingscene/3.PNG';
import safety3 from '../../assets/img/peoplebehingscene/4.PNG';

function Albums() {
  return (
    <>
      <div className="headingTeam">
        {/* text above the images */}
        <div className="textTeam">
        <div class="section-title">
            <h2>PEOPLE BEHIND THE SCENE</h2>
        </div>
          <div className="quoteTeam">
            <p>Good teams incorporate teamwork into their
          culture, creating the building blocks for success</p>
          </div>
        </div>
        {/* images */}
        <div className="albumTeam">
          <div className="imageTeam">
            <img
              src={safety}
              height="100%"
              width="100%"
              alt="img1"
            ></img>
            
          </div>
          <div className="imageTeam">
            <img
              src={safety1}
              height="100%"
              width="100%"
              alt="img2"
            ></img>
           
          </div>
          <div className="imageTeam">
            <img
              src={safety2}
              height="100%"
              width="100%"
              alt="img3"
            ></img>
           
          </div>
          <div className="imageTeam">
            <img
              src={safety3}
              height="100%"
              width="100%"
              alt="img3"
            ></img>
           
          </div>
        </div>
      </div>
    </>
  );
}
export default Albums;