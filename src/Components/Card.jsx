import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.cardImg} alt="" />
                <div className="cards-details">
                  <h4>{props.cardName}</h4>
                <p>{props.cardParagraf}</p>
     </div>
    </div>
  )
}

export default Card