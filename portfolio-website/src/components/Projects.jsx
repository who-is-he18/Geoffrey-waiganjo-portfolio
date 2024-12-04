import React from 'react';
import '../styles/Projects.css';


const Projects = () => {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projects-list">
                <div className="project">
                    <h2>Project 1: Portfolio Website</h2>
                    <p>
                        A personal portfolio website built with React. It showcases
                        my work, skills, and experience.
                    </p>
                    <a
                        href="https://github.com/yourusername/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View on GitHub
                    </a>
                </div>
                <div className="project">
                    <h2>Project 2: Job-seeking App</h2>
                    <p>
                        A web application for job seekers and employers. Built with
                        Flask and PostgreSQL.
                    </p>
                    <a
                        href="https://github.com/yourusername/job-seeking-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View on GitHub
                    </a>
                </div>
                {/* Add more projects here */}
            </div>
        </div>
    );
};

export default Projects;
