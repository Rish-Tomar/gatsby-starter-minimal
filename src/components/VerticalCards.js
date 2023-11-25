import React from 'react'
import Image1 from '../images/1.png'
import Image2 from '../images/2.png'
import Image3 from '../images/3.png'

const mainDiv={
    backgroundColor: 'black',
    height:'100%',
    display:'flex',
    flexDirection:'column',
   
}

const imageDiv ={
    height:'80vh',
    width:'45%',
    marginLeft:'27%',
    marginRight:'27%',
    gap:'2rem'
}
function VerticalCards() {
  return (
    <div style={mainDiv} >
        <img style={imageDiv} src={Image1}/>
        <img style={imageDiv} src={Image1}/>
        <img style={imageDiv} src={Image1}/>
    </div>
  )
}

export default VerticalCards