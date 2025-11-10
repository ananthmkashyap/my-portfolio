import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import mock12 from '../assets/images/mock12.png';
import mock13 from '../assets/images/mock13.png';
import mock14 from '../assets/images/mock14.png';
import recommendation from '../assets/docs/Letter of Recommendation.pdf';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 - Sep 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud & DevOps Engineer - Part Time</h3>
            <h4 className="vertical-timeline-element-subtitle">Lohr am Main, Deutschland</h4>
            <p>
              Azure & AWS Cloud , Terraform (IaC) , Serverless & Containerized Workloads , Automation & CI/CD
              <a href="https://www.boschrexroth.com/en/dc/" target="_blank" rel="noreferrer"><img src={mock12} alt="Bosch Rexroth Logo" className="rexroth-company-logo"/></a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023 - Apr 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud & DevOps Engineer - Part Time</h3>
            <h4 className="vertical-timeline-element-subtitle">Stuttgart, Deutschland</h4>
            <p>
              AWS EKS & Karpenter, Terraform (IaC), GitHub Actions CI/CD , Kubernetes & Autoscaling
            </p>
            <a href={recommendation} target="_blank" rel="noreferrer"><img src={mock13} alt="ETAS Logo" className="etas-company-logo"/></a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2021 - Sep 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Site Reliability Engineer - Full Time</h3>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru, India</h4>
            <p>
              AWS Cost Optimization , Automation & Monitoring , Monitoring & Security Compliance
            </p>
            <a href="https://www.tcs.com/" target="_blank" rel="noreferrer"><img src={mock14} alt="TCS Logo" className="tcs-company-logo"/></a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;