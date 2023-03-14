import Link from "next/link";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import Image from 'next/legacy/image'
import Cta from './Cta'

export default function Navigation() {
  return (
    <div>
        <nav className="navbar">
           <div className="logo">MUO</div>
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className='menu'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Home</Link>
                </div>
            </ul>
        </nav>
        <style jsx>{`
        input[type=checkbox]{
            display: none;
        } 
    
    
        .hamburger {
        
        display: none;
        
        font-size: 24px;
        
        user-select: none;
        
        }
    
    
    @media (max-width: 768px) {
    
    .menu { 
    
     display:none;
    
     position: absolute;
    
     background-color:teal;
    
     right: 0;
    
     left: 0;
    
     text-align: center;
    
     padding: 16px 0;
    
    }
    
    .menu li:hover {
    
     display: inline-block;
    
     background-color:#4c9e9e;
    
     transition: 0.3s ease;
    
    }
    
    .menu li + li {
    
     margin-top: 12px;
    
    }
    
    input[type=checkbox]:checked ~ .menu{
    
     display: block;
    
    }
    
    .hamburger {
    
     display: block;
    
    }
    
    .dropdown {
    
     left: 50%;
    
     top: 30px;
    
     transform: translateX(35%);
    
    }
    
    .dropdown li:hover {
    
    background-color: #4c9e9e;
    
    }
    
    }
        `}</style>  
    </div>
  )
}
