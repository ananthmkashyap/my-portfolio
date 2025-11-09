import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import mock15 from '../assets/images/mock15.png';
import mock16 from '../assets/images/mock16.png';


function Education() {
  return (
    <div id="Education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' , width: '65%'}}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2022 - Jun 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">Universität Stuttgart</h3>
            <h3 className="vertical-timeline-element-title">Master of Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Information Technology</h4>
            <a href="https://www.uni-stuttgart.de/" target="_blank" rel="noreferrer"><img src={mock15} alt="Uni Stuttgart Logo" className="education-logo"/></a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' , width: '65%'}}
            date="Oct 2016 - Oct 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">Dr. Ambedkar Institute of Technology</h3>
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Electronics and Communication</h4>
            <a href="https://www.drait.edu.in/" target="_blank" rel="noreferrer"><img src={mock16} alt="ETAS Logo" className="education-logo"/></a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;