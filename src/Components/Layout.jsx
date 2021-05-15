import React from 'react';
import favicon from '../assets/favicon.ico'
import Helmet from 'react-helmet'
import Nav from './Nav';
import Hamburger from './Hamburger';
import Footer from './Footer';
import '../index.css';
import '../App.css';

class Layout extends React.Component {
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
      const Component = this.props.children;
      return (
        <>
            <Helmet>
                <link rel="icon" href={favicon}/>
            </Helmet>
            <Nav mode={this.state.mode} handleMode={this.handleMode} />
            <Hamburger mode={this.state.mode} />

            <div className={`${this.state.mode ? "dark-app app" : "app"} Content`} id="home">
                {this.props.children(this.state.mode)}
            </div>

            <Footer />
        </>
      );
  }
};
export default Layout;
