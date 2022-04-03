import React from 'react'

import './appointment.css'

export const Appointment = () => {
  return (
    <div className='containerApp'>
        <h2>
            Make an appointment
        </h2>
        <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing. <br/> Maecenas semper odio diam, a tempus.
        </h3>
        <div className='inputs-line1'>
            <input type={'text'} placeholder='Name'></input>
            <input type={'email'} placeholder='Email'></input>
            <input type={'text'} placeholder='Phone'></input>
        </div>
        <div className='inputs-line2'>
            <input id='input' type={'date'}></input>
            <div id='input'>
                <div>Department</div>
                <div>
                    <ul>
                        <li>Pediatric</li>
                        <li>Cardiac</li>
                        <li>Ophthalmology</li>
                    </ul>
                </div>
            </div>
            <button id='input'>Confirm</button>
        </div>
    </div>
  )
}
