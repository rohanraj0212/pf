import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import {FaBars,FaTimes} from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {

    const [click, setclick] = useState(false);
    const [scrollcolor, setscrollcolor] = useState(false);
    const handleClick=()=>{
        setclick(!click);
    }

    const changecolor=()=>{
        if(window.scrollY>=100){
            setscrollcolor(true);
        }else{
            setscrollcolor(false);
        }
    };

    window.addEventListener("scroll",changecolor);
  return (
    <div className={scrollcolor?"header header-bg":"header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className='nav-btn-menu' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>)}
        </div>
    </div>
  )
}

export default Navbar