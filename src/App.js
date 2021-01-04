import React from 'react';
import './App.css';

//Custom Components
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Hamburger from './Components/Hamburger';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Life from './Components/Life';

class App extends React.Component {
  constructor(props) {
    const windowGlobal = typeof window !== 'undefined' && window;
    super(props)
    if(typeof window !== 'undefined') {
      this.state = {
        mode: JSON.parse(localStorage.getItem("Mode"))
      }
    } else {
      
      this.state = {
        mode: false
      }
    }
  }

  handleMode = () => {
    const windowGlobal = typeof window !== 'undefined' && window;
    if (JSON.parse(windowGlobal.localStorage.getItem("Mode")) === true) {
      this.setState({ mode: false }, () => {
        windowGlobal.localStorage.setItem("Mode", JSON.stringify(false));
      })
    } else {
      this.setState({ mode: true }, () => {
        windowGlobal.localStorage.setItem("Mode", JSON.stringify(true));
      })
    }
  }

  render() {
    return (
      <div className={this.state.mode ? "dark-app app" : "app"} id="home">

        <Nav mode={this.state.mode} handleMode={this.handleMode} />
        <Hamburger mode={this.state.mode} />
        <Hero mode={this.state.mode} />

        <div className="Content">
          <About />
          <Skills />
          <Projects />
          <Life mode={this.state.mode}/>
          <Resume />
          <Contact />
        </div>

        <Footer />

      </div>

    )
  }
}

export default App;
