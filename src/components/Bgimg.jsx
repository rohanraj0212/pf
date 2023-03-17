import "./Bgimg.css";
import React from 'react'
import IntroImg from "../assets/fcover.jpg";
import { Link } from "react-router-dom";

const Bgimg = () => {
  return (
    <div className="bg">
        <div className="bg1">
            <img className="into-img" src={IntroImg} alt="IntoImg"/>
        </div>
        <div className="content">
            <p>HI, I'M ROHAN RAJ SINGH.</p>
            <h1>React</h1>
            <br/>
            <h1>Front-end</h1>
            <br/>
            <h1>Developer.</h1>
            <br/>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default Bgimg