import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf
} from '@fortawesome/free-solid-svg-icons';

function Resume() {
  return (
    <div id="resume" className="section-wrapper">
      <div className="resume-inner-wrapper">

        <div>
          <h3>Resume</h3>
        </div>

        <div className="resume-icon-wrapper">
          <a href="/pranav_joglekar_resume.pdf" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} size="2x"/>
          </a>
        </div>

      </div>
    </div>

  )
}

export default Resume
