import React from 'react'
import Logo from '../images/logo.webp'
import '../css/includes.css'


const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footerbox">
            <a  href="/"><img src={Logo}  /></a>
            </div>
        </footer>
    )
}

export default Footer
