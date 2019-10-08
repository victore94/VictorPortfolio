import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div class='jumbotron'>
          <div class='row'>
          </div>

          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
