import React, { useState, useEffect } from 'react';
import './tooplate-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from './ImageSlider';

function Project({title, text, images, icons, leftRight}) {
    const iconsStyle = {
        position: "relative",
        marginTop: "auto", /* Push the image to the bottom */
        textAlign: "center", /* Center the image horizontally */
        height: "50px",
        paddingRight: "10px"
      }

      //images is a file directory how ot make it loop thru and get all the directory

      if(leftRight ==="left"){
        return (
            <div className="container">
          <div className="row">
            <div className="col-md-6">
            <br></br>
        <br></br>
            <ImageSlider slides={images} />
            </div>
            <div className="col-md-6">
              <h3>{title}</h3>
              <p>{text}</p>
              {icons.map((icon, index) => (
                    <img key={index} alt="Icon" src={icon} style={iconsStyle} />
                  ))}
              
            </div>
          </div>
        </div>
        
          );

      }else{
  return (
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <h3>{title}</h3>
      <p>{text}</p>
      {icons.map((icon, index) => (
            <img key={index} alt="Icon" src={icon} style={iconsStyle} />
          ))}
      
    </div>
    <div className="col-md-6">
        <br></br>
        <br></br>
      <ImageSlider slides={images} />
    </div>
  </div>
</div>

  );
}
}

export default Project;
