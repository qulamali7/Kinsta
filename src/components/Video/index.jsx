import React from 'react'
import "./index.scss";
const Video = () => {
  return (
    <>
    <section id='video'>
        <div className='video_container'>
            <video src="https://kinsta.com/wp-content/uploads/2023/12/Section-Loop-Animation-6.mp4" autoPlay play-button-variant="play" aria-hidden="true" tabindex="-1"  loop muted playsinline ></video>
        </div>
    </section>
    </>
  )
}

export default Video