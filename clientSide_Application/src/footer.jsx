import React from 'react'
import { NavLink } from "react-router";
import facebookIcon from "../src/assets/facebook-icon.svg";
import instagramIcon from "../src/assets/instagram-icon.svg";
import whatsappIcon from "../src/assets/whatsapp-icon.svg";
import linkedinIcon from "../src/assets/linkedin-icon.svg";
import logo from "../src/assets/logo-icon.png";

function Footer() {
    return (
        <>
            <footer className='d-flex justify-content-center'>
                <div>
                    <img src={logo} width={150}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quos.</p>
                </div>
                <div>
                    <ul className='list-unstyled'>
                        <h6>Contact US</h6>

                        <li><NavLink className="text-decoration-none">E: nandakishore@gmail.com</NavLink></li>
                        <li><NavLink className="text-decoration-none">E: nandakishore@gmail.com</NavLink></li>
                        <li><NavLink className="text-decoration-none">E: nandakishore@gmail.com</NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul className='list-unstyled'>
                        <h6>Useful links</h6>

                        <li><NavLink className="text-decoration-none">Shop All</NavLink></li>
                        <li><NavLink className="text-decoration-none">Tempered Glass</NavLink></li>
                        <li><NavLink className="text-decoration-none">Back Cover</NavLink></li>
                        <li><NavLink className="text-decoration-none">About Us</NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul className='list-unstyled'>
                        <li><NavLink className="text-decoration-none">
                        <img src={whatsappIcon}/>Whatsapp</NavLink></li>
                        <li><NavLink className="text-decoration-none"><img src={facebookIcon}/>Facebook</NavLink></li>
                        <li><NavLink className="text-decoration-none"><img src={instagramIcon}/>Instagram</NavLink></li>
                        <li><NavLink className="text-decoration-none"><img src={linkedinIcon}/>Linkedin</NavLink></li>
                    </ul>
                </div>
            </footer>

        </>
    )
}

export default Footer;
