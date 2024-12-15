import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Life  = (props) => {
  var mode_class;
  if(props.mode) {
    mode_class = "dark";
  } else {
    mode_class = "light";
  }
  return (
    <div id="life" className="page-wrapper">
      <div className="life-inner-wrapper">
        <div>
          <h1 className="section-title"> Life </h1>
        </div>
        <br/>
        <div>
          <VerticalTimeline className={mode_class}>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="Aug 2022 - Present"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer - <a href="https://www.postman.com/">Postman</a></h3>
              <h4 className="vertical-timeline-element-subtitle">Bengaluru, India</h4>
              <p>
                Built <a href="https://learning.postman.com/docs/administration/managing-your-team/secret-scanner/">Postman's Secret Scanner</a> - a product which informs users when their passwords, tokens & secrets are leaked on Postman.  The scanner handles 200+ scans per second and has found more than 1,00,000 secrets till date.
              </p>
              <p>
                Created <a href="https://learning.postman.com/docs/sending-requests/postman-vault/postman-vault-secrets/">Postman Vault</a> - A local first encrypted storage solution to store users API Keys & Authorizations tokens safely.
              </p>
              <p>
                Worked with Azure, 1Password, AWS and HashiCorp teams to develop <a href="https://learning.postman.com/docs/sending-requests/postman-vault/postman-vault-integrations/">Postman Vault Integration</a> allowing users to use secrets stored in external sources
              </p>
              <p>
                These features are used by 100000+ users and have brought in 1 Million + ARR.
              </p>
              <p>
                Developed Client Side Scanner to scan entities for secrets locally in less than 10ms using WebAssembly.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="Aug 2021 - May 2022"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Founding Engineer - Camify</h3>
              <h4 className="vertical-timeline-element-subtitle">Remote</h4>
              <p>
                Developed a desktop app using React & Electron in 3 months.
              </p>
              <p>
                Reverse engineered messaging protocols of various streaming services like Twitch to integrate them into the consolidated app.
              </p>
              <p>
                Set up a RTMP based streaming service using ffmpeg & nginx to duplicate and split streams
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="Dec 2020 - Present"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Founding Engineer - <a href="https://stampmyvisa.com/">Stamp My Visa</a></h3>
              <h4 className="vertical-timeline-element-subtitle">Bengaluru, India</h4>
              <p>
                Worked as an interim CTO for a year, managing the team & setting up tech processes to ensure the startup succeeds.
              </p>
              <p>
                Designed the architecture from scratch - System Design, DB Designs, Technologies, Devops & SRE.
              </p>
              <p>
                Worked across the stack to build a prototype of the website in 3 months along with a team of 4
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="June 2021 - Present"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Global DevOps Manager - <a href="https://www.bridgesforenterprise.com/">Bridges for Enterprise</a></h3>
              <h4 className="vertical-timeline-element-subtitle">Remote</h4>
              <p>
                oversee BfE's cloud infrastructure covering areas from setup, management to budgeting
              </p>
              <p>
                manage and troubleshoot internal DevOps deployment pipelines and local development setup
              </p>
              <p>
                maintain a vision of our tech toolchain and infrastructure needs according to the projected scale of our operation and our financial capabilities
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="Feb 2020 - Dec 2020"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Nanostuffs - Consultant</h3>
              <h4 className="vertical-timeline-element-subtitle">Pune, India</h4>
              <p>
                Set up automated scripts to process images, upload them to S3 and synchronize tasks between EC2 instances using a mongoDB cluster.
              </p>
              <p>
                Built and deployed a highly scalable ML solution for distinguishing between spam and important messages, and classifying the important messages into more categories, as per client requirements
              </p>
              <p>
                Built scrapers for 50+ websites
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="Jan 2021 - June 2021"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Intern - Bajaj Health</h3>
              <h4 className="vertical-timeline-element-subtitle">Remote</h4>
              <p>
                Migrated an existing B2B project to a React, leading to onboarding of 50+ partners with personalised interfaces.
              </p>
              <p>
                Drove improvement in code quality and standards by deploying SonarQube company-wide
              </p>
              <p>
              Refactored a document generation microservice, bringing down TAT to add new document templates from 2 days to 30 minutes
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="Jan 2020 - April 2020"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Zulip - OpenSource Contributor</h3>
              <h4 className="vertical-timeline-element-subtitle">Remote</h4>
              <p>
                Contributed around 15 <a href="https://github.com/zulip/zulip/pulls?q=author%3APranav2612000+">PRs</a>(10 + merged) to the platform, PRs consisted of tests and bug fixes.
              </p>
              <p>
                Worked on alternate designs to improve UI/UX of the pages.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="2017 - 2021"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Technical Lead - Software Development Section</h3>
              <h4 className="vertical-timeline-element-subtitle">Pune, India</h4>
              <p>
                Communicate with project stakeholders to extract requirements,design a system to fulfill these requirements and convert these requirements to code
              </p>
              <p>
               Consistently review code from various projects(5+)
              </p>
              <p>
              Motivate, guide and assist juniors, solve their technical difficulties and teach concepts like versioncontrol, SDLC, cleancode.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="2017 - 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">College of Engineering Pune</h3>
              <h4 className="vertical-timeline-element-subtitle">Pune, India</h4>
              <p>
                Bachelors in Information Technology
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};
export default Life;
