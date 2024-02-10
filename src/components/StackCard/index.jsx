import React from 'react'
import "./index.scss";
const StackCard = ({ img, title, text }) => {
    return (
        <>
            <div className='stack_card'>
                <div className='stack_card_content'>
                    <div className='stack_card_content_img'>
                        <img src={img} alt="" />
                    </div>
                    <h3 className='stack_card_content_title'>{title}</h3>
                    <p className='stack_card_content_text'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default StackCard