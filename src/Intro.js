import React, { useState, useEffect } from 'react';
import './tooplate-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Intro() {
  const [text, setText] = useState("");
  const introText = "Hi, my name is <b>Barry Khaw</b> :D"; // The entire text

  useEffect(() => {
    const textArray = introText.split("");
    let currentCharIndex = 0;

    const interval = setInterval(() => {
      if (currentCharIndex <= textArray.length) {
        setText(textArray.slice(0, currentCharIndex).join(""));
        currentCharIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval for typing speed

    return () => {
      clearInterval(interval);
    };
  }, [introText]);

  return (
    <section id="page-top" >
    <div className='intro-container' style={{ backgroundColor: '#353535', minHeight: '50px', padding: '20px' }}>
      <div className='text-center' >
        <p dangerouslySetInnerHTML={{ __html: text }} style={{ color: 'white' }}></p>
        <div className='text-center' style={{ color: 'white' , fontSize: 20}}>
          Fresh Grad with interest in AI/ML and Mobile Development
        </div>
      </div>
    </div>
    </section>
  );
  
}

export default Intro;
