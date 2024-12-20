"use client";

import React from "react";

const InfoBox = ({ title, items }) => {
    return (
      <div>
          <h1 id="infobox">{ title }</h1>
          <ul id="meetingbox">
            {
              items.map((item, index) => (
                <React.Fragment key={index}>
                  <li className='times'>{item.time}</li>
                  <li className="events">{item.meeting}</li>
                  <br />  
                </React.Fragment>              
            ))}
          </ul>
      </div>
    )
  }
  
  export default InfoBox