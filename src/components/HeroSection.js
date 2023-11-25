import React from 'react'
import image from '../images/heroImage.png'
const mainDiv={
    textAlign:'center',
    backgroundColor:'black',
    height:'100vh',
}

const heading={
    color:'white',
    fontSize:'xxx-large'
}

const textStyle={
    color:'white'
}

function HeroSection() {
  return (
    <div style={mainDiv}>
        <p><h1 style={heading}>It's time to Trade.</h1></p>
        <h1 style={heading}>the Future</h1>
        <p style={textStyle}>Trade BTC,ETH Futures With 125x Leverage and Earn Reqards.</p>
        <img src={image} alt="heroSection Image"/>
    </div>
  )
}

export default HeroSection