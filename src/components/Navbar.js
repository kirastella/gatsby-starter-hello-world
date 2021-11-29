import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Menu</h1>
            <div className="links">
                <Link to="/">Hjem</Link>
                <Link to="/about">Om os</Link>
                <Link to="/shop">Shop</Link>

            </div>
            
        </nav>
    )
}
