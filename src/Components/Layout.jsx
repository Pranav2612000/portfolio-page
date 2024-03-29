import React from 'react';
import favicon from '../assets/favicon.ico'
import Helmet from 'react-helmet'
import Nav from './Nav';
import Hamburger from './Hamburger';
import Footer from './Footer';
import mugShot from "../assets/MugshotCard.jpg";
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
                <title>Portfolio | Pranav Joglekar</title>
                <link rel="icon" href={favicon}/>
                <link rel="canonical" href="https://pranavjoglekarcodes.web.app"/>
                <meta name="description" content="Pranav Joglekar's portfolio and blog website. Blogs written by Pranav hosted here.
                Contains Pranav's work and projects. Visit this if page if you want to hire a rockstar developer"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="Pranav Joglekar Portfolio Projects Blog Experience"/>
                <meta name="author" content="Pranav Joglekar"/>

                <meta property="og:title" content="Pranav Joglekar | Portfolio"/>
                <meta property="og:description" content="Pranav Joglekar's portfolio and blog website. Blogs written by Pranav hosted here.
                Contains Pranav's work and projects. Visit this if page if you want to hire a rockstar developer"/>
                <meta property="og:image" content={"https://pranavjoglekarcodes.web.app" + mugShot}/>
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="600" />
                <meta property="og:url" content="https://pranavjoglekarcodes.web.app"/>
                <meta property="og:locale" content="en_GB" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:description" content="Pranav Joglekar's portfolio and blog"/>
                <meta name="twitter:title" content="Pranav Joglekar | Portfolio"/>
                <meta name="twitter:image" content={"https://pranavjoglekarcodes.web.app" + mugShot}/>

                <meta name="twitter:site" content="@joglekar_pranav" />
                <meta name="twitter:creator" content="@joglekar_pranav" />


                <meta property="og:site_name" content="Pranav Joglekar | Portfolio"/>
                <meta name="twitter:image:alt" content="Pranav Joglekar"/>

                {/* Script for Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-8T9TBP554C"></script>
                <script>
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-8T9TBP554C');
                  `}
                </script>
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
