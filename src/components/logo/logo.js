import React from 'react';
import Tilt from 'react-tilt'
import face from './face-recognition.png';
import './logo.css';

const options={
     max : 55,
     scale: 1.08
}

const Logo = () =>{
    return(
        <div className="logo-container">
        <Tilt className="Tilt" options={options} >
        <div className="Tilt-inner"> <img alt='face' src={face}/> </div>
       </Tilt>
       </div>
    )
}


export default Logo;