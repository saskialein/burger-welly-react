import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="main-header">
            <nav className="main-nav" >
                <ul className="main-nav__items" >
                    <li className="main-nav__item"><NavLink exact to='/' activeClassName="active" className="nav-link"> Home</NavLink></li>
                    <li className="main-nav__item"><NavLink to='/burger' activeClassName="active" className="nav-link"> Burgers</NavLink></li>
                    <li className="main-nav__item main-nav__item--cta"><NavLink to='/burger/new' activeClassName="active" className="nav-link"> Add Burger</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
