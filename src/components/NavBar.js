import React from 'react'


const navBar ={
    backgroundColor:'rgb(22 28 23 / 96%)',
    display:"flex",
    justifyContent:'space-evenly',
    alignItems:'center',
    height:'4rem'
}
const densityTitle={
    fontSize: 'xx-large',
    color:"#edff62fc"
}

const rightBlockNav={
    display:'flex',
    gap:'2rem'
}
const optionText={
    color:'white'
}

const tradeNowDiv={
    borderRadius:'5px',
    backgroundColor:'#edff62fc',
    width:'100px',
    height:"2.7rem",
    padding:"0px 6px",
    alignItems:'center',
    boxShadow:'4px 4px 4px 4px #d5dec95e'
}

const Box =(text)=><div style={optionText}>{text}</div>


function NavBar() {
  return (
   <div style={navBar}>
        <div style={densityTitle}>density</div>
        <div style={rightBlockNav}>
            {Box('Career')}
            {Box('Blogs')}
            {Box('LeaderBoards')}
            {Box('Fees')}
        </div>
        <div style={tradeNowDiv}><p>TRADE NOW</p></div>
   </div>
  )
}

export default NavBar