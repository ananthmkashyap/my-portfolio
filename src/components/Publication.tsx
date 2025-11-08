import mock11 from '../assets/images/mock11.png';
import '../assets/styles/Publication.scss';

function Publication() {
    return (
        <div className="publication-container" id="publications">
            <h1>Publication</h1>

            <div className="publications-grid">

                <div className="publication">

                    {/* IMAGE */}
                    <a 
                        href="https://link.springer.com/chapter/10.1007/978-981-96-3250-3_8#Sec8" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <img 
                            src={mock11} 
                            alt="thumbnail" 
                            className="publication-img"
                        />
                    </a>

                    {/* RIGHT SIDE TEXT */}
                    <div className="publication-text">

                        {/* TITLE */}
                        <a 
                            href="https://link.springer.com/chapter/10.1007/978-981-96-3250-3_8#Sec8" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <h2>
                                Monitoring and Optimization of Machine Learning Workloads Using Kubernetes
                            </h2>
                        </a>

                        {/* AUTHORS — stacked vertically */}
                        <div className="publication-authors">

                            <p>Authors:</p>
                            <a 
                                href="https://www.linkedin.com/in/ananth-m-kashyap-a1bbb2189/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="author-link"
                            >
                                Kashyap, Ananth Mahesh
                            </a>

                            <a 
                                href="https://www.linkedin.com/in/dineshreddyvemula/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="author-link"
                            >
                                Vemula, Dinesh Reddy
                            </a>

                            <a 
                                href="https://www.linkedin.com/in/aiellom/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="author-link"
                            >
                                Aiello, Marco
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Publication;
