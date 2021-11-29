import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div className="nameicon">
            <img src="dog_icon.png" alt="logo"/>
            <Link to="/">Hundeland</Link>
            </div>
            <div className="links">
                <Link to="/">Hjem</Link>
                <Link to="/about">Om os</Link>
                <Link to="/alldogs">Alle hunde</Link>
                <Link to="/shop">Shop</Link>

            </div>
            
        </nav>
    )
}
