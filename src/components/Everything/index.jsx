import React from 'react'
import "./index.scss";
import EverythingCard from '../EverythingCard';
import EverythingCards from '../EverythingCards';
const Everything = () => {
  return (
    <>
    <section id='everything'>
        <div className='everything_container'>
            <div className='everything_content'>
                <div className='everything_title'>
                    <h2 className='everything_title_main'>Easy setup for your complete everything</h2>
                    <p className='everything_title_text'>Create with any technology or framework, and we make sure that your app is up and running.</p>
                </div>
                <EverythingCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Everything