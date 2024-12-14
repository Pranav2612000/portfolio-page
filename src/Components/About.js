import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

function About() {
  return (
    <div id="about" className="section-wrapper">
      <div className="about-inner-wrapper">
        <h1 className="section-title">About Me</h1>
        <section id="about-pranav">

          <div className="about-pranav-photo-wrapper">
            <StaticImage
              alt="photo of Pranav"
              src="../assets/Mugshot.jpeg"
              formats={["auto", "webp", "avif"]}
              id="pranav-photo"
              height={300}
            />
          </div>

          <div className="about-pranav-summary">
            <p>Engineer who loves to solve tough problems</p>


            <p>
            I am a Full Stack expert building an API first world at <a href="https://postman.com/">Postman</a>. I was introduced to the world of programming at the age of 13 through Scratch, (using which I created my first game) and I was enamoured by it. Since then, for the past 10 years, I've been tinkering with technology to craft beautiful websites, build awesome products and solve problems. I'm a hacker at heart - not building something makes me restless.
            </p>

            <p>
            For me, writing code is like solving a puzzle - You have different pieces(the language syntax) and you need to put these pieces together appropriately to solve a problem. And hey, I am a vim guy, in the age of IDEs, who loves to contribute to Open Source. I'm a Javascript Wizard, tech polyglot, DevOps aficionado and someone who gets the job done - irrespective of the technology. This has been made possible by my strong fundamentals in Algorithms, OS, Networks & Security.
            </p>

            <p>
            I love to debate about computers, technology & puzzles. I'm an avid reader - Books, Blogs, Newsletters & Tweets - I read everything. When not reading, I write tech blogs here. 
            Drop me a PM, if you have any interesting topics for discussion.
            </p>

            <p>
            My curiosity makes me a quick learner which has helped me adapt to new technologies and programming languages. I am able to stay calm and make rational decisions under stress. For stress busting, I run marathons and play basketball.
            </p>
          </div>


        </section>
      </div>
    </div>
  )
}

export default About