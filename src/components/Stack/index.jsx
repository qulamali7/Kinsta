import React from 'react'
import "./index.scss";
import StackCards from '../StackCards';
const Stack = () => {
  return (
    <>
    <section id='stack'>
        <div className='stack_container'>
            <div className='stack_content'>
                <div className='stack_title'>
                    <h2 className='stack_title_main'>Easy setup for your complete stack</h2>
                    <p className='stack_title_text'>Create with any technology or framework, and we make sure that your app is up and running.</p>
                </div>
                <StackCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Stack