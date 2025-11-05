import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "AWS",
    "Microsoft Azure",
    "Terraform",
    "Kubernetes",
    "Helm",
    "Linux",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Jenkins",
    "Powershell",
    "Bash",
    "Python",
    "GO",
];

const labelsThird = [
    "TypeScript",
    "TurboRepo",
    "Node.js",
    "Docker",
    "GitHub Actions for Monorepo",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud Engineering</h3>
                    <p>Experience in managing and automating cloud infrastructures on AWS and Azure. Skilled in container orchestration (Kubernetes, EKS, Azure Container Apps) and Infrastructure as Code (IaC) using Terraform.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>CI/CD & Automation</h3>
                    <p>Set up and optimized end-to-end CI/CD pipelines with GitHub Actions and Jenkins, automating build, test, and deployment workflows across environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>Turbo Monorepo</h3>
                    <p>Designed and implemented a Turbo Monorepo architecture to consolidate shared codebases, enabling faster builds, simplified dependency management, and consistent deployments across applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;