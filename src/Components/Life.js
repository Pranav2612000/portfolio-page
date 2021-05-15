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
              date="2015 - 2017"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Modern College of Science, Arts & Commerce</h3>
              <h4 className="vertical-timeline-element-subtitle">Pune, India</h4>
              <p>
                Higher Secondary Education
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
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="May 2020 - June 2020"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Glossaread Frontend Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Remote</h4>
              <p>
                Interacted with design team to convert design to React pages
              </p>
              <p>
                Used Tools like AdobeXD, Zeplin, Figma for working with designs.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work " + mode_class}
              date="Feb 2020 - Present"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Nanostuffs - Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Pune, India</h4>
              <p>
                Built and deployed a highly scalable ML Solution for distinguishing between spam and important messages, and classifying important messages into further categories, as per client requirements
              </p>
              <p>
                Develop Web Scrapers to automate tasks
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
              date="2017 - Present"
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
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};
export default Life;
