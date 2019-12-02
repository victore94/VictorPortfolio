import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import Resume from '../Extras/WebResume.pdf'
// import logo from '../Images/IMG_0086.PNG'

const Navbar = () => {
    return (
        <div className='blackbar'>
            <ul className="nav justify-content-center">
                {/* <Link className=" logo navbar-brand" to='/'>
                    <img className='justify-content-center' src={logo} width="45" height="45" />
                </Link> */}
                <li className="nav-item">
                    <Link to='/' className="nav-link active" >Home</Link>
                </li>
                {/* <li className="nav-item">
                    <Link to='/about' className="nav-link" >About</Link>
                </li> */}
                <li className="nav-item">
                    <Link to='/contact' className="nav-link" >Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to='/projects' className="nav-link" >Projects</Link>
                </li>
                <li className="nav-item">
                    <a href={Resume} className="nav-link" target='_blank'>Resume</a>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                </li> */}
            </ul>
        </div>

    )
}

export default Navbar