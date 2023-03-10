import React from 'react';
import './index.css'

const Header = () => {
  console.log("test header");
 
    const handleClick = (event) => {
      console.log('object clicked');
    }
  
      return (
  
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand" onClick={handleClick}>Home</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="./components/About" onClick={handleClick}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./components/Projets" onClick={handleClick}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href= "./components/Resume" onClick={handleClick}>Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./components/Contact" onClick={handleClick}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
      )};


export default Header;