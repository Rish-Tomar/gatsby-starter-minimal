import React from 'react'

const mainDiv={
    backgroundColor: 'black',
    height:'100%',
}
const secondaryDiv={
    display:'flex',
    justifyContent:'space-evenly',
    height:'80px',
    gap:'2rem',
    marginLeft:'15%',
    marginRight:'15%',
    border:'0.5px solid #edff62fc',
    alignItems:'center',
    textAlign:'center',
    paddingTop:'5px'
}
const divWrapper={
    borderRight:'0.5px solid #edff62fc',
}
const divfirstText={
    color:'#edff62fc',
    fontSize:'x-large',
    marginBottom:'0px',
}
const divSecondText={
    color:'white'
}

function Frame1() {
  return (
    <div style={mainDiv}>
       <div style={secondaryDiv}>
            <div ><h7 style={divfirstText}>00%</h7>
                  <p style={divSecondText}>coversion Fees</p>
            </div>
            <div >
                <h7 style={divfirstText}>500Mn+</h7>
                <p style={divSecondText}>Lifetime Volume Traded</p>
            </div>
            <div >
                <h7 style={divfirstText}>250+</h7>
                <p style={divSecondText}>Total Tradable Pair</p>
            </div>
            <div >
                <h7 style={divfirstText}>15,000+</h7>
                <p style={divSecondText}>Traders</p>
            </div>
       </div>
    </div>
  )
}

export default Frame1