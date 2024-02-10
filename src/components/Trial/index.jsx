import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Trial = () => {
    return (
        <>
            <section id='trial'>
                <div className='trial_container'>
                    <div className='trial_content'>
                        <div className='trial_bck'>
                            <h2>Start your free trial</h2>
                            <Link>Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trial