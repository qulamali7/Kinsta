import React from 'react'
import "./index.scss";
const EverythingCard = ({img,title,text}) => {
  return (
    <>
    <div className='everything_card'>
        <div className='everything_card_content'>
            <div className='everything_card_content_img'>
                <img src={img} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
    </>
  )
}

export default EverythingCard