import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../App.css';
import Layout from '../Components/Layout.jsx';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Skills from '../Components/Skills';
import Resume from '../Components/Resume';
import Life from '../Components/Life';

const IndexPage = () => {
  return (
    <Layout>
        {(mode) => (
          <>
            <Hero mode={mode}/>
            <About />
            <Skills />
            <Projects />
            <Life mode={mode}/>
            <Resume />
            <Contact />
          </>
        )}
    </Layout>
  );
};
export default IndexPage;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
