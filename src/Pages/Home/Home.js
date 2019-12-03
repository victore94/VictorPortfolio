import React from 'react';
import home from './Images/VEL_0533.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className=''>

            <div className='box'>
                <div className='row'>
                    <img className='selfie' src={home} />
                    <p className='homeP'>
                        Hello! My name is Victor Lopez, I'm a California Bay Area based Full Stack Web Developer leveraging a background in sociology to build a more intuitive user experience on the web. I recently earned a certificate in Full Stack Development from the University of California, Davis, developing skills in  MongoDB, Express.js, ReactJS, and Node.js. While working with a team of two designers and two fellow developers, I’ve been able to successfully create multiple MERN applications including one that allows users to bet on e-sporting events. Excited to develop responsive websites; as well as applications, and collaborate with a team in a meaningful way. I’m positioned well to provide a unique and impactful perspective on development from start to full deployment.
                        </p>
                </div>
            </div>

        </div>
    )
}

export default Home;