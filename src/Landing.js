import React from 'react'
import video from './assets/video.mp4'

const Landing = () => {
  return (
    <div className='landing'>
        <div className='overlay'></div>
        <video src={video} muted loop autoPlay></video>
        <div className='content'>
            <h1>
                WELCOME TO HAWAII
            </h1>
            <p>
                HAWAII is a group of volcanic islands  in the Central Pacific
            </p>
            <p>
                Beautiful beaches, Surfing and Volcanoes
            </p>
            <button>BUY TICKETS</button>
        </div>
    </div>
  )
}

export default Landing