import React from 'react'

import './appointment.css'

export const Appointment = () => {
    return (
        <div className='containerApp'>
            <h2>
                Make an appointment
            </h2>
            <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing. <br /> Maecenas semper odio diam, a tempus.
            </h3>
            <div className='grid-container'>
                <div className="grid-item">
                    <input type={'text'} placeholder='Name'></input>
                </div>
                <div className="grid-item" id="middle">
                    <input type={'email'} placeholder='Email'></input>
                </div>
                <div className="grid-item">
                    <input type={'text'} placeholder='Phone'></input>
                </div>
                <div className="grid-item">
                    <input type={'date'}></input>
                </div>
                <div className="grid-item">
                    <input type={'date'}></input>
                </div>
                <div className="grid-item">
                    <button id='input'>Confirm</button>
                </div>
            </div>
        </div>
    )
}
