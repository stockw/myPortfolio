import React from 'react';
// import { Switch } from 'react-router-dom'
import { Router, Route } from 'react-router';
import Header from './components/Header/';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';



function App() {
  // const testFunction = async () => {
  //   const response = await fetch('/test_route')
  return (
    <Router>
      {/* <div className="App"> */}
        <Header />
        {/* <Switch> */}
          <Route exact path="/about" components={About} />
          <Route exact path="/projects" components={Projects} />
          <Route exact path="/resume" components={Resume} />
          <Route exact path="/contact" Components={Contact} />
        {/* </Switch> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
