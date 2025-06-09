import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <img src={assets.logo} alt='' style={{ width: '150px', height: 'auto' }} className='logo' />
                <img src={assets.profile_image} className='profile'/>

            </div>
        </div>
    )
}

export default Navbar
