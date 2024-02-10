import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Try = () => {
    return (
        <>
            <section id='try'>
                <div className='try_container'>
                    <div className='try_content'>
                        <div className='try_bck'>
                            <h2>Try it for free</h2>
                            <p>Sign up with your favorite Git provider or email, and start deploying in seconds</p>
                            <Link>Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Try