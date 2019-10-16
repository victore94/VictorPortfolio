import React from 'react';
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

import { BrowserRouter, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div class='container'>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/VictorPortfolio' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/projects' component={Projects} />
        </div>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
