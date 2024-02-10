import React from 'react'
import "./index.scss";
const ProcessCard = ({img,title,text}) => {
  return (
    <>
    <div className='process_card'>
        <figure>
            <img src={img} alt="" />
        </figure>
        <div className='process_card_text'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
    </>
  )
}

export default ProcessCard