import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

function Nav(props) {
  return (
    <nav className={props.mode ? "nav dark-nav" : "nav"}>

      <ul className="logo-nav">
        <a href="/#home">Pranav</a>
        <div className="btn-mode" title="light or dark mode">
          <div className={props.mode ? "btn-icons btn-icons-dark" : "btn-icons"} onClick={props.handleMode}>
            <FontAwesomeIcon icon={faMoon} size="1x"/>
            <div className={props.mode ? "btn-circle-new btn-circle" : "btn-circle"}></div>
            <FontAwesomeIcon icon={faSun} size="1x"/>
          </div>
        </div>
      </ul>

      <ul className="ul-nav">
        <a href="/#about" className="nav-item"><li>About</li></a>
        <a href="/#skills" className="nav-item"><li>Skills</li></a>
        <a href="/#projects" className="nav-item"><li>Projects</li></a>
        <a href="/#life" className="nav-item"><li>Life</li></a>
        <a href="/#resume" className="nav-item"><li>Resume</li></a>
        <a href="/#contact" className="nav-item"><li>Contact</li></a>
      </ul>

    </nav>
  )
}

export default Nav;
