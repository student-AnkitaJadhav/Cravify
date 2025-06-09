import React from "react";
import './Footer.css';
import { assets } from "../../assets/assets";

const Footer =  () =>{
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" style={{ width: '150px', height: 'auto' }}/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatem numquam possimus sit aliquid minus voluptas sequi dolores enim? Repudiandae deleniti odio dolorum autem ducimus possimus reiciendis assumenda quos soluta.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-2345-23-6788</li>
                        <li>contact@cravify.com</li>
                    </ul>
                </div>
                
            </div>
            <hr />
            <p className="footer-copyright">© 2025 Cravify. All rights reserved. Crafted with flavor and passion.</p>
        </div>
    )
}
export default Footer;