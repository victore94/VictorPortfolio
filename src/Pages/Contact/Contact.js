import React from 'react';
import linkedIn from './Images/linkedin.svg'
import git from './Images/git.svg'
import mail from './Images/mail.svg'
import insta from './Images/insta.svg'
import './Contact.css'

const Contact = () => {

    return (

        <div className='container'>

            <div className='row justify-content-center'>
                <a className='symbols' href='https://github.com/victore94' target="_blank"><img src={git} /></a>
                <a className='symbols' href="https://www.linkedin.com/in/victore-lopez/" target="_blank" ><img src={linkedIn} /></a>
                <a className='symbols' href="http://instagram.com/victore.shoots" target="_blank" ><img src={insta} /></a>
                <a className='symbols' href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=victorelwebdev@gmail.com" target="_blank"><img src={mail} /></a>

            </div>

        </div>

    )
}
export default Contact