import React from 'react';
import togthrdo from '../assets/project-togthrdo.jpg';
import webreview from '../assets/project-webreview.png';
import ima from '../assets/project-ima.jpeg';
import milaap from '../assets/project-milaap.png';
import smtp from '../assets/project-smtpclient.png';
import encryptor from '../assets/project-encryptor.png';


const renderTopProjects = () => {
  return (
    <>
        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <a href="https://milaap.video/" target="_blank" rel="noopener noreferrer">
                <img className="large" src={milaap} alt="Milaap Video"/>
              </a>
            </div>
          </section>

          <section className="single-project-right">
            <div className="project-title">
              <h4>
                <a href="https://milaap.video/" target="_blank" rel="noopener noreferrer">Milaap</a>
              </h4>
            </div>

            <div className="project-description">
              <p>
                Milaap is a Decentralized Video/Audio CHAT/conferencing application, which is designed to work on the edge(i.e peer to peer), with very little interference of the server. 

                There are many video calling applications around the globe, but they are mostly server based applications providing maximum load on the server, wherein the audio and video quality decreases with increase in the number of participants. Many don't even support end-to-end encryption.

              So me and my team decided to develop a one-stop solution for not only addressing all these solution, but to give a seamless experience to the user. Milaap is a decentralized video/audio conferencing application, which is designed to work in a peer to peer fashion. It is designed to work efficiently on all platforms.
              </p>

              <p>Technologies:</p>
              <ul>
                <li>Node</li>
                <li>React</li>
                <li>Express</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>WebRTC</li>
                <li>Gcloud</li>
                <li>Nginx</li>
                <li>simple-peer</li>
              </ul>

              <div className="project-links">
                  <a href="https://milaap.video/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg> 
                    Demo / Live version
                  </a>
              </div>

            </div>
          </section>
        </section>


        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <a href="https://stormy-woodland-33610.herokuapp.com/login/" target="_blank" rel="noopener noreferrer">
                <img className="large" src={togthrdo} alt="togthrdo" />
              </a>
            </div>
          </section>

          <section className="single-project-right">
            <div className="project-title">
              <h4>
                <a href="https://stormy-woodland-33610.herokuapp.com/login/" target="_blank" rel="noopener noreferrer">togthrdo - A radical note-taking application</a>
              </h4>
            </div>

            <div className="project-description">
              <p>
                 Take notes together and arrange them in beautiful ways!! Note-taking and task management was never this fun 
              </p>
              <p>There are many TODO managing applications, but none of them are as intuitive to use as togthrdo. Togthrdo allows you to create lists, add cards to lists and drag these cards between lists, as other applications. But the reason why toghtrdo is better, is because, it allows users to drag and move lists around on the board - to create meaningful views for managing your tasks.</p>
              <p> Refer the README for more information </p>

              <p>Technologies:</p>
              <ul>
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node</li>
                <li>JavaScript</li>
                <li>heroku</li>
              </ul>

              <div className="project-links">
                  <a href="https://stormy-woodland-33610.herokuapp.com/login/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg> 
                    Demo / Live version
                  </a>
                <a href="https://github.com/Pranav2612000/colab_tool" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View repo on Github
                  </a>
              </div>

            </div>
          </section>
        </section>
    </>
  );
};

const renderOtherProjects = () => {
  return (
      <>
        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <a href="https://imamssss.com" target="_blank" rel="noopener noreferrer">
                <img className="small" src={ima} alt="Indian Medical Association Maharashtra Section Social Security Scheme" />
              </a>
            </div>
          </section>

          <section className="single-project-right">
            <div className="project-title">
              <h4>
                <a href="https://www.imamsss.com" target="_blank" rel="noopener noreferrer">
                  Indian Medical Association - Social Security Scheme
                </a>
              </h4>
            </div>

            <div className="project-description">
              <p>
                A website and management tool for the Indian Medical Association, Maharashtra Section - A tool to help IMA manage its Social Service Scheme.
                Consists of a user side where users can log in to view their application, can pay their fees online and request assistance. The admin side consists of monitoring the users, creating bills and receipts, and sending alerts to the users through mails and messages. (https://www.imamssss.com).
                Project scope includes automating the process of generation of bills & receipts and dispersing the receipts to current scheme holders in an automatic fashion. 
              </p>

              <p>Technologies:</p>
              <ul>
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>JavaScript</li>
                <li>Nginx</li>
                <li>AWS</li>
              </ul>

              <div className="project-links">
                <a href="https://imamssss.com/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg> 
                    Demo / Live version
                  </a>
              </div>

            </div>
          </section>
        </section>

        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <img className="small" src={smtp} alt="smtp_client" height="250px"/>
            </div>
          </section>

          <section className="single-project-right">
            <div className="project-title">
              <h4>
                <a href="http://doodles-art-gallery.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
                  Email Client Application using Python Socket Programming
                </a>
              </h4>
            </div>

            <div className="project-description">
              <p>
                A simple email client in python which uses sockets to connect to SMTP and IMAP servers to send and receive emails(containing attachements)
              </p>

              <p>Technologies:</p>
              <ul>
                <li>Python</li>
                <li>Socket Programming</li>
                <li>SMTP</li>
                <li>IMAP</li>
              </ul>

              <div className="project-links">
                <a href="https://github.com/Pranav2612000/smtp_email_client" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View repo on Github
                  </a>
              </div>

            </div>
          </section>
        </section>

        <section className="single-project">
          <section className="single-project-right">
            <div className="project-title">
              <h4>
                <p>myNano - improved fork of nano text editor</p>
              </h4>
            </div>

            <div className="project-description">
              <p>
                When opening a directory in nano, the original behaviour was to display an error message saying the file we opened is an directory. 
                After my changes, on opening a directory, it displays the contents of the current directory and allows to navigate through the directories using the UP/DOWN arrow keys to select a file/directory and ENTER to open the selected directory.               
              </p>
              <p>Technologies:</p>
              <ul>
                <li>C</li>
                <li>make</li>
              </ul>

              <div className="project-links">
                <a href="https://github.com/Pranav2612000/mynano" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View repo on Github
                  </a>
              </div>
              
            </div>
          </section>
        </section>

        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <a href="https://encryptor4cubbitbypranav.web.app" target="_blank" rel="noopener noreferrer">
                <img className="large" src={encryptor} alt="web review" />
              </a>
            </div>
          </section>
          <section className="single-project-right">
            <div className="project-title">
              <h4>
                <a href="https://encryptor4cubbitbypranav.web.app" target="_blank" rel="noopener noreferrer">Cubbit - Online File Encryptor</a>
              </h4>
            </div>

            <div className="project-description">
              <p>
                A fast, lightweight web application, with minimalistic clean UI, to encrypt/decrypt files on the go.
              </p>
              <p>Technologies:</p>
              <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>firebase</li>
              </ul>

              <div className="project-links">
                <a href="https://encryptor4cubbitbypranav.web.app/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg> 
                    Demo / Live version
                  </a>
                <a href="https://github.com/Pranav2612000/encryption-app" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View repo on Github
                  </a>
              </div>
              
            </div>
          </section>
        </section>

        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <a href="https://www.npmjs.com/package/web-review" target="_blank" rel="noopener noreferrer">
                <img className="small" src={webreview} alt="web review" />
              </a>
            </div>
          </section>

          <section className="single-project-right">
            <div className="project-title">
              <h4>
                <a href="https://www.npmjs.com/package/web-review" target="_blank" rel="noopener noreferrer">Web Review - npm package</a>
              </h4>
            </div>

            <div className="project-description">
              <div>
                  <p>
                It is extremely important from the developer's point of view that your website is responsive and follows good practices. That's why me and team have developed web-review a CLI based npm package which will compile reports consisting of :
                  </p>
                  <ul>
                    <li>Performace of website</li>
                    <li>Responsiveness (Screenshots)</li>
                    <li>SEO capability</li>
                    <li>Accessibility</li>
                    <li>Best Practices</li>
                    <li>Progressive web app support</li>
                  </ul>
                <br/>
                And serve it to you HTML format. All this is done by modifying lighthouse under the hood.
              </div>
              
              <p>Technologies:</p>
              <ul>
                <li>JavaScript</li>
                <li>Node</li>
                <li>npm</li>
                <li>Lighthouse</li>
              </ul>

              <div className="project-links">
                <a href="https://www.npmjs.com/package/web-review" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg> 
                  NPM Link
                  </a>
                <a href="https://github.com/savannahar68/web-review" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View repo on Github
                  </a>
              </div>
              
            </div>
          </section>
        </section>
      </>
    )
}

function Projects(props) {
  return (
    <div id="projects" className="section-wrapper">
      <div className="projects-wrapper">

        <h1 className="section-title">Projects</h1>

            {renderTopProjects()}
            {props.type==="all" && renderOtherProjects()}

        <br/>
        <p> See more Projects <a href="https://github.com/Pranav2612000?tab=repositories"> here </a></p>
        <br/>
      </div>
    </div>
  )
}

export default Projects
