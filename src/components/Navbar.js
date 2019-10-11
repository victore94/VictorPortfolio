import React from 'react';
import { Link, Navlink } from 'react-router-dom'
import './css/Navbar.css'
import Resume from './Extras/Resume.pdf'
// import logo from './Images/IMG_0086.PNG'

const Navbar = () => {
    return (

        <ul class="nav justify-content-center">
            {/* <Link class=" logo navbar-brand" to='/'>
                <img class='justify-content-center' src={logo} width="45" height="45" />
            </Link> */}
            <li class="nav-item">
                <Link to='/' class="nav-link active" >Home</Link>
            </li>
            <li class="nav-item">
                <Link to='/about' class="nav-link" >About</Link>
            </li>
            <li class="nav-item">
                <Link to='/contact' class="nav-link" >Contact</Link>
            </li>
            <li class="nav-item">
                <a href={Resume} class="nav-link" >Resume</a>
            </li>
            {/* <li class="nav-item">
                    <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                </li> */}
        </ul>
    )
}

export default Navbar