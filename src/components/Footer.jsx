import "./Footer.css";
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={60} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>HIG-21, Sharda Kunj, Narela Shankari, Bhopal (M.P),</p>
                            <p>India.</p>

                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />+91-78030 51774</h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />rohanthakur0212@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>This is me Rohan Raj Singh. This is my portfolio website related to some of my projects and I am the Founder of Youtube channel <b>dance&actwithRohan</b> where you will find content related to Dance and Acting.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer