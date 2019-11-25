import React from 'react';
import './Projects.css'

const Projects = () => {
    return (

        <div className='container'>
            <div className='row'>

                <div className="col-sm-6">
                    <div className="card justify-item-center">
                        <img src={require('./Images/project1.png')} className="card-img-top" alt="Excursion screenshot" />
                        <div className="card-body">
                            <h5 className='projectP' className="card-title">Excursion</h5>
                            <p className='projectP' className="card-text">A simple to use travel planner that finds you cheap flights and great food in a location you choose.</p>
                            <a href="https://victore94.github.io/GroupProject1/" className='projectP' className="btn">Check it out</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <img src={require('./Images/project2.png')} className="card-img-top" alt="Ebrius screenshot" />
                        <div className="card-body">
                            <h5 className='projectP' className="card-title">Ebrius</h5>
                            <p className='projectP' className="card-text">Put your bartending creations to the test and allow people to try and recreate your drinks.</p>
                            <a href="https://secure-plateau-53716.herokuapp.com/cocktail.html" className="btn">Check it out</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='row'>
                <div className="col-sm-6">
                    <div className="card">
                        <img className="card-img-top" alt="Ebrius screenshot" />
                        < div className="card-body" >
                            <h5 className='projectP' className="card-title">Gamblr</h5>
                            <p className='projectP' className="card-text">Bet on e-sporting events</p>
                            <a href="" className="btn">Check it out</a>
                        </div>
                    </div>
                </div>
            </div> */}

        </div >
    )
}
export default Projects