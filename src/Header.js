import React from 'react'
import logo from './assets/hawaii-logo.png'

const Header = () => {
  return (
  <div className='header'>
        <div className='left-section'>
            <img src={logo}></img>
             <div>Roundtrip</div>
             <div>One-way</div>
             <div>Multi-city</div>
        </div>
        <div className='middle-section'></div>
        
        <div className='right-section'> 
        
        <div>Business</div>
        <div>Trips</div>
        <div>Sign-In</div>
        
        </div>
       
    </div>
  )
}

export default Header