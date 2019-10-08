import React from 'react';
import { Link, Navlink } from 'react-router-dom'
import '../App.css'
import logo from './Images/IMG_0086.PNG'

const Navbar = (props) => {
    console.log(props)
    return (
        <nav class="navbar navbar-light bg-light ">

            <ul class="nav">

                <Link class=" logo navbar-brand" to='/'>
                    <img class='justify-content-start' src={logo} width="45" height="45" />
                </Link>
                <li class="nav-item">
                    <Link to='/' class="nav-link active" >Home</Link>
                </li>
                <li class="nav-item">
                    <Link to='/about' class="nav-link" >About</Link>
                </li>
                <li class="nav-item">
                    <Link to='/contact' class="nav-link" >Contact</Link>
                </li>
                {/* <li class="nav-item">
                    <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                </li> */}
            </ul>
        </nav >
    )
}

export default Navbar