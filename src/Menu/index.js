import React, { useState } from 'react'

import './menu.css'

export const Menu = () => {
    const [bold, setBold] = useState('')

    const boldHandler = (ident) => {
        setBold(ident);
    }

    return (
        <header>
            <img alt='valley' src='logovalley.png'></img>
            <ul>
                <li id='home' onClick={(e) => boldHandler(e.target.id)}>{bold === 'home' ? <b>Home</b> : 'Home'}</li>
                <li id='about' onClick={(e) => boldHandler(e.target.id)}>{bold === 'about' ? <b>About</b> : 'About'}</li>
                <li id='services' onClick={(e) => boldHandler(e.target.id)}>{bold === 'services' ? <b>Services</b> : 'Services'}</li>
                <li id='contact' onClick={(e) => boldHandler(e.target.id)}>{bold === 'contact' ? <b>Contact</b> : 'Contact'}</li>
            </ul>
        </header>
    )
}
