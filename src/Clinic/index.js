import React from 'react'

import './clinic.css'

export const Clinic = () => {
    return (
        <div className='clinic-section'>
            <div className='column' id='imagem'/>
            <div className='column' id='texto'>
                <h1>
                    Our clinic
                </h1>
                <hr/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, purus eu dignissim viverra, erat tellus aliquam magna, quis suscipit sem erat eu odio. Nam porttitor dictum elementum. Morbi efficitur tortor et erat pulvinar ultricies. Maecenas lorem nisi, tempus eu nunc et, mollis sagittis risus.
                </p>
            </div>
        </div>
    )
}
