import React from 'react';
import Pranav from '../assets/Mugshot.jpeg'

function About() {
  return (
    <div id="about" className="section-wrapper">
      <div className="about-inner-wrapper">
        <h3>About Me</h3>
        <section id="about-pranav">

          <div className="about-pranav-photo-wrapper">
            <img src={Pranav} id="pranav-photo" alt="Pranav avatar"/>
          </div>

          <div className="about-pranav-summary">
            <p>Software Engineer | Full Stack Developer | Cyber Security Enthusiast </p>

            <p> I am an undergraduate student, pursuing Bachelors in Information Technology at College of Engineering, Pune. I was introduced to the fabulous world of programming at the age of 13 through Scratch,(where I created my first game) and since then it has always fascinated me. Since then, for the past 9 years, I have learnt many new languages and technologies and worked on various projects. For me, writing code is like solving a puzzle - You have different pieces(the language syntax) and you need to put these pieces together correctly to solve the problem. And hey, I am a vim guy, in the age of IDEs, with only a Linux OS(No windows on dual boot!).
            </p>

            <p>
          The fields that interest and challenge me are - Algorithms, OS, Networks & Security ( I know that's very diverse!). I am currently exploring all these fields through various projects. I am taking multiple advanced courses online on these fields to know them better and chose my specialization.(No luck so far).
            </p>

            <p>
            I love to debate & discuss about computers and technical stuff. Drop me a PM, if you have any interesting topics for discussion or if you are interested in hiring me ( Yes, good news, I am currently unemployed).
            </p>

            <p>
            I like to read books and solve puzzles. . I am good at quickly learning and adapting to new technologies and programming languages and hence can easily fit into new teams. I am able to stay calm and make rational decisions under stress. For stress busting, I play sports. 
            </p>
          </div>


        </section>
      </div>
    </div>
  )
}

export default About
