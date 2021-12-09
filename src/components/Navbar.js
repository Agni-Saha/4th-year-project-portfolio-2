import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <Link to="/"> <i className="fas fa-home"></i> <span>home</span> </Link>
                <Link to="/about"> <i className="fas fa-user"></i> <span>about</span> </Link>
                <Link to="/projects"> <i className="fas fa-blog"></i> <span>projects</span> </Link>
                <Link to="/contact"> <i className="fas fa-address-book"></i> <span>contact</span> </Link>
            </nav>
        </div>
    )
}
