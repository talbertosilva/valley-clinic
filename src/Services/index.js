import React from 'react'

import './services.css'

export const Services = () => {
    return (
        <div className='grid-services'>
            <div className='column'>
                <img src='facilities.jpg' alt='facilities'></img>
                <div className='text-card'>
                    <h1>
                        Quality Facilities
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at ultrices augue. Duis tempus mauris euismod elementum dapibus.
                    </p>
                </div>
            </div>
            <div className='column'>
                <img src='doctor2.jpg' alt='doctor'></img>
                <div className='text-card'>
                    <h1>
                        Qualified Doctors
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at ultrices augue. Duis tempus mauris euismod elementum dapibus.
                    </p>
                </div>
            </div>
            <div className='column'>
                <img src='family.jpg' alt='family'></img>
                <div className='text-card'>
                    <h1>
                        Family Healthcare
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at ultrices augue. Duis tempus mauris euismod elementum dapibus.
                    </p>
                </div>
            </div>
        </div>
    )
}
