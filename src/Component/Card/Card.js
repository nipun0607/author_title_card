import React from 'react'
import './Card.css'; 


const Card = (props) => {
  return (
    <div className='card_container'>
    <div className='card_title'>{props.title}
    </div>
    <div className="card_author">{props.author}</div>
     
    </div>
  )
}

export default Card
