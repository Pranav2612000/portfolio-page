import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import gsap from 'gsap';

function HeroMask(props) {
  const [mouseMoved, setMouseMoved] = useState(false);
  useEffect(()=> {
    /* Don't render the animation unless the user interacts with the page(to improve CLS) */
    if(!mouseMoved) {
      return;
    }

    const hero = document.querySelector('[data-hero]')

    /* Timeline */
    const tl = gsap.timeline({ delay: 1 })

    tl
      .to(hero, {
        '--maskSize1': '20%',
        duration: 0.5,
        ease: 'back.out(2)',
      })
      .to(hero, {
        '--maskSize2': '28%',
        '--maskSize3': 'calc(28% + 0.1rem)',
        duration: 0.5,
        delay: 0.5,
        ease: 'back.out(2)',
      })

    /* Cursor */
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      const x = Math.round((clientX / window.innerWidth) * 100)
      const y = Math.round((clientY / window.innerHeight) * 100)
      
      gsap.to(hero, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out',
      })
    })
    return () => {
      console.log("removing hero");
    };
  }, [mouseMoved])

  const handleMouseMove = () => {
    setMouseMoved(true);
  }

  return (
    <>
      <div onMouseMove={handleMouseMove} className={props.mode ? "hero-section hero-section-dark hero--secondary--dark mobile-hidden" : "hero-section hero--secondary mobile-hidden"}
      aria-hidden="true" data-hero>

        <a href="/#about">
          <div className={props.mode ? "hero-title hero-title-dark" : "hero-title"}>
            <h1>Pranav Joglekar</h1>
            <h2>Problem Solver</h2>
          <div className="code-box">
            <pre>
              <code>
                <span className="const">const</span>{" "}
                <span className="const-name">Pranav</span>{" "}
                <span className="equals">{"="}</span> {"{"}
              </code>

              <code>
                &emsp;<span className="property">status</span>
                <span className="colon">:</span>{" "}
                <span className="string">"Building 🛠️"</span>,
              </code>
              <code>
                &emsp;<span className="property">looking_for_work</span>
                <span className="colon">:</span>{" "}
                <span className="string">true</span>,
              </code>
              <code>
                &emsp;<span className="property">interests</span>
                <span className="colon">:</span> [
              </code>
              <code>
                &emsp;&emsp;<span className="string">"rust"</span>,
              </code>
              <code>
                &emsp;&emsp;<span className="string">"reading"</span>,
              </code>
              <code>
                &emsp;&emsp;<span className="string">"running"</span>,
              </code>
              <code>&emsp;],</code>
              <code>{"};"}</code>
            </pre>
          </div>
          </div>
        </a>

        <div className="arrow-section">
          <a href="/#about">
            <svg className="down-arrow-img bounce" width="100%" height="80px" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 100 150 L 300 150 L 200 300 z"
                fill="none"
                stroke={props.mode ? "rgb(40, 40, 43)": "rgb(235, 230, 250)"}
                strokeWidth="6"
              />
            </svg>
          </a>
        </div>
        <div className='social-icons'>
          <a href="https://www.linkedin.com/in/pranav-joglekar/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
          </a>
          <a href="https://github.com/Pranav2612000" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          </a>
          <a href="mailto: pranav26joglekar@gmail.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>        </a>
        </div>
      </div>
    </>
  )
}

export default HeroMask
