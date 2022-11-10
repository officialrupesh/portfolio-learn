import "./FooterStyle.css"
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">

                <div className="location">
                <FaHome size={20} style={{ color:'#fff', marginRight: "2rem" }} />
                <p>Miteri Marga, Kathmandu </p>
                <p>, Nepal</p>
                </div>

                <div className="phone">
                <FaPhone size={20} style={{ color:'#fff', marginRight: "2rem" }} />
               <h4> <p>981234567</p></h4>
                </div>

                
                <div className="email">
                 <FaMailBulk size={20} style = {{ color: "#fff", marginRight: "2rem" }} />
                   <h4> <p>smaofficialrupesh@gmail.com</p></h4>
                </div>

            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is Rupesh Raut. Currently waiting results of 8th semester. I enjoy
                    learning programming and related stuffs. I am currently searching 
                    an internship in front end React JS
                </p>
                <div className="social">
                <FaFacebook size={30} style = {{ color: "#fff", marginRight: "1rem" }} />
                <FaInstagram size={30} style = {{ color: "#fff", marginRight: "1rem" }} />
                <FaTwitter size={30} style = {{ color: "#fff", marginRight: "1rem" }} />
                <FaLinkedin size={30} style = {{ color: "#fff", marginRight: "1rem" }} />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer