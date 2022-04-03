import React from 'react'

import './footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='column-1'>
                <h1>Pages</h1>
                <p>Home</p>
                <p>Services</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className='column-2'>
                <h1>Contact</h1>
                <p>Dr. John Silva</p>
                <p>john@valleyclinic.com</p>
                <p>(+351) 273-3043-32</p>
            </div>
            <div className='column-3'>
                <h1>Our location</h1>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum</p>
                <p>9023-329</p>
                <button>Open Maps</button>
            </div>
        </div>
    )
}
