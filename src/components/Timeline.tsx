import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

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
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud & DevOps Engineer - Part Time</h3>
            <h4 className="vertical-timeline-element-subtitle">Lohr am Main, Deutschland</h4>
            <p>
              Azure & AWS Cloud , Terraform (IaC) , Serverless & Containerized Workloads , Automation & CI/CD
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
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Sep 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Site Reliability Engineer - Full Time</h3>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru, India</h4>
            <p>
              AWS Cost Optimization , Automation & Monitoring , Monitoring & Security Compliance
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;