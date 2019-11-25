import React from 'react';
import home from './Images/home.png';
import './Home.css';

const Home = () => {
    return (
        <div className=''>

            <div className='box'>
                <div className='row'>
                    <div className='col'>
                        <img className='selfie' src={home} />
                    </div>
                    <div className='col'>
                        <p className='homeP'>
                            Hello! My name is Victor Lopez, I'm a California Bay Area based Full Stack Web Developer.
                            I have a diverse set of skills ranging from MongoDB to MySQL, Express, ReactJS, Node.JS and many more.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;