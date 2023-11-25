import React from 'react'

const mainDiv={
    backgroundColor: 'black',
    height:'100%',
}

const spanFirstText={
    color:'#edff62fc',
    fontSize:'xxx-large',
    marginBottom:'0px',
}
const spanSecondText={
    color:'white',
    fontSize:'xxx-large',
}

const cardStyles={
    display:'flex',
    flexDirection:'column',
    // color:'white',
    backgroundColor:'grey',
    width:'30%',
    height:'30vh',
    textAlign:'center'
}

const pTextBold={
    color:'white',
    fontSize:'x-large',
    fontWeight:'600',
    fontFamily:'math'
}

function CardSection() {
  return (
    <div style={mainDiv}>
        <div style={{textAlign:'center'}}>
            <p><span style={spanSecondText}>TRADE More.</span><span style={spanFirstText}>Pay Less</span></p>
            <p style={{color:'white'}}>Our low Fees SuperCharge Your Profits</p>
        </div>
        <div style={{margin:'10%',display:'flex',gap:'3rem'}}>
            <div style={cardStyles} id='card-1'>
                {/* coin DCX */}
                <h4>CoinDCX</h4>
                <div>
                <p style={pTextBold}>0.025</p>
                <p>Makers Fees</p>
               </div>
               <div>
                <p  style={pTextBold}>0.07</p>
                <p>Takers Fees</p>
               </div>

            </div>
            <div style={cardStyles} id='card-2'>
                {/* coin DCX */}
                <h4>density</h4>
                <div>
                <p  style={pTextBold}>0.02</p>
                <p>Makers Fees</p>
               </div>
               <div>
                <p  style={pTextBold}>0.04</p>
                <p>Takers Fees</p>
               </div>

            </div>
            <div style={cardStyles} id='card-3'>
                {/* coin DCX */}
                <h4>Delta</h4>
               <div>
                <p  style={pTextBold}>0.02</p>
                <p>Makers Fees</p>
               </div>
               <div>
                <p  style={pTextBold}>0.05</p>
                <p>Takers Fees</p>
               </div>

            </div>
        </div>
    </div>
  )
}

export default CardSection