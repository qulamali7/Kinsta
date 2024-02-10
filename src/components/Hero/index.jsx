import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
    <section id='hero'>
        <div className='hero_container'>
            <div className='hero_area'>
                <div className="hero_content">
                    <h1>Web Application Hosting</h1>
                    <p>From backend to frontend, everything is in one place</p>
                    <div className='hero_links'>
                        <Link className='try_links'>Try for Free</Link>
                        <Link className='see_links'>See Pricing</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero