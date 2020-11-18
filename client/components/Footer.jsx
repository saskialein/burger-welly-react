import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul className="main-footer__links">
                    <li className="main-footer__link">
                            <p>Saskia's first REACT website</p>
                        </li>
                        <li className="main-footer__link">
                            <Link to = "mailto:saskia.leinberger@gmail.com?subject=You are awesome!" className="link">Contact me to appreciate my work!</Link>
                        </li>
                    </ul>
            </nav>
        </footer>
    )
}
