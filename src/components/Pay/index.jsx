import React from 'react'
import "./index.scss";
import PayCards from '../PayCards';
const Pay = () => {
  return (
    <>
    <section id='pay'>
        <div className='pay_container'>
            <div className='pay_content'>
                <div className='pay_title'>
                    <h2 className='pay_title_main'>Be clear on what you pay for</h2>
                    <p className='pay_title_text'>Transparent pricing that’s entirely usage-based.</p>
                </div>
                <PayCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Pay