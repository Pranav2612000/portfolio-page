import React from 'react';
import Pranav from '../assets/Mugshot.jpeg'

function About() {
  return (
    <div id="about" className="section-wrapper">
      <div className="about-inner-wrapper">
        <h1 className="section-title">About Me</h1>
        <section id="about-pranav">

          <div className="about-pranav-photo-wrapper">
            <img src={Pranav} id="pranav-photo" alt="Pranav avatar"/>
          </div>

          <div className="about-pranav-summary">
            <p>Software Engineer | Full Stack Developer | Cyber Security Enthusiast </p>


            <p> Pranav Joglekar is an undergraduate student, pursuing Bachelors in Information Technology at College of Engineering, Pune. Pranav was introduced to the fabulous world of programming at the age of 13 through Scratch and it fascinated him. Since then, for the past 9 years, Pranav has learnt many new languages and technologies and worked on various projects. For him, writing code is like solving a puzzle - You have different pieces(the language syntax) and you need to put these pieces together correctly to solve the problem. And he is a vim guy, in the age of IDE.
            </p>

            <p>
          Pranav Joglekar finds Algorithms, OS, Networks & Security interesting. He is currently exploring all these fields through various projects. He is taking multiple advanced courses online on these fields to know them better and chose his specialization.(No luck so far).
            </p>

            <p>
            Pranav Joglekar love to debate & discuss about computers and technical stuff. Drop him a PM, if you have any interesting topics for discussion or if you are interested in hiring him( Yes, good news, He is currently unemployed).
            </p>

            <p>
            Pranav Joglekar likes to read books and solve puzzles. He is good at quickly learning and adapting to new technologies and programming languages and hence can easily fit into new teams. I am able to stay calm and make rational decisions under stress. For stress busting, He plays sports. 
            </p>
          </div>


        </section>
      </div>
    </div>
  )
}

export default About