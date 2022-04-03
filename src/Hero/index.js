import React from 'react'

import './hero.css'

export const Hero = () => {
    return (
        <div className='container'>
            <div className='hero'>
                <h1>
                    Professional<br />Health Care Services
                </h1>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae rutrum sem. Morbi urna leo, vestibulum ac iaculis id, commodo a felis.
                </h3>
                <button>
                    See our services
                </button>
            </div>

            <img alt='doctor' src='doctor.png'></img>
        </div>
    )
}
