import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Navbar from './components/Navbar/Navbar'
import './App.css';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
      </div>
      <footer></footer>
    </Router>
  );
}

export default App;
