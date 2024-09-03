import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <h1 className='logo'>Tafach.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium architecto rerum ex libero vero repellat, eveniet, incidunt soluta nihil maiores, voluptas quidem asperiores dolor nobis fugiat porro doloribus labore.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>

        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
         <a href="#explore-menu"><li>Menu</li></a>   
           <a href="#food-display"><li>Food Display</li></a> 
            <li>Privacy Policy</li>
          </ul>

        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0964671617</li>
            <li>mogesbekele32@gmail.com</li>
          </ul>
              
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 &copy; mogesbekele32@gmail.com All Rirht Reserved.
      </p>
    </div>
  )
}

export default Footer
