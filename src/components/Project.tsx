import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/ananthmkashyap/Research_Thesis" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2>ML Workload Energy Optimization in Public Cloud</h2>
                <p>This Project aims to use Kubernetes Efficient Power Level Exporter (Kepler) tool to extract power consumption metrics of Kubernetes pods during training of ML workloads in order to optimize the workloads to consume less energy.</p>
            </div>
            <div className="project">
                <a href="https://www.icloud.com/iclouddrive/0e8liVona-moVXyATBIvVScuQ#Master%5FThesis%5F%5F%5FAnanth%5FMahesh%5FKashyap" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.icloud.com/iclouddrive/0e8liVona-moVXyATBIvVScuQ#Master%5FThesis%5F%5F%5FAnanth%5FMahesh%5FKashyap" target="_blank" rel="noreferrer"><h2>Serverless Computing vs Kubernetes for ETL Workloads</h2></a>
                <p>Kubernetes (K8s) enables scalable, flexible container orchestration but comes with high operational complexity and costs for managing large-scale, data-intensive workloads. Serverless containerization offers a solution by automating scaling, infrastructure management, and resource optimization, allowing teams to focus on workload execution. This study evaluates major serverless container platforms and implements Bosch Rexroth’s Knowledge Synchronizer ETL tools using Azure Container App Jobs, analyzing CPU, memory, network, and cold start metrics to assess suitability for enterprise-grade operations.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;