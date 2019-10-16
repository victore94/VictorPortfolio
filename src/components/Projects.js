import React from 'react';
import './css/Projects.css'

const Projects = () => {
    return (

        <div class='container'>
            <div class='row'>

                <div class="col-sm-6">
                    <div class="card justify-item-center">
                        <img src={require('./Images/project1.png')} class="card-img-top" alt="Excursion screenshot" />
                        <div class="card-body">
                            <h5 class='projectP' class="card-title">Excursion</h5>
                            <p class='projectP' class="card-text">A simple to use travel planner that finds you cheap flights and great food in a location you choose.</p>
                            <a href="https://victore94.github.io/GroupProject1/" class='projectP' class="btn">Check it out</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <img src={require('./Images/project2.png')} class="card-img-top" alt="Ebrius screenshot" />
                        <div class="card-body">
                            <h5 class='projectP' class="card-title">Ebrius</h5>
                            <p class='projectP' class="card-text">Put your bartending creations to the test and allow people to try and recreate your drinks.</p>
                            <a href="https://secure-plateau-53716.herokuapp.com/cocktail.html" class="btn">Check it out</a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default Projects