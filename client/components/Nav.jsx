import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="main-header">
                <nav className="main-nav" >
                    <ul className="main-nav__items" >
                        <li className="main-nav__item"><Link to='/' className="nav-link"> Home</Link></li>
                        <li className="main-nav__item"><Link to='/burger' className="nav-link"> Burgers</Link></li>
                        <li className="main-nav__item main-nav__item--cta"><Link to='/burger/new' className="nav-link"> Add Burger</Link></li>
                    </ul>
                </nav>
        </div>
    )
}
