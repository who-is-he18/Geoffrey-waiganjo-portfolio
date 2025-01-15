import React, { useEffect } from 'react';
import '../styles/Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
    }, []);

    const projectData = [
        {
            title: "Portfolio Website",
            description:
                "A personal portfolio website built with React. It showcases my work, skills, and experience.",
            image: "images/pic4.png",
            link: "https://github.com/who-is-he18/Geoffrey-waiganjo-portfolio",
        },
        {
            title: "Job-seeking App",
            description:
                "A web application for job seekers and employers. Built with Flask and PostgreSQL.",
            image: "images/pic2.avif",
            link: "https://jobhive-frontend.onrender.com/",
        },
        {
            title: "Eco-friendly Bike Rental App",
            description:
                "A seamless bike rental application with integrated booking and payment features.",
            image: "images/pic3.jpg",
            link: "https://bike-hire-theta.vercel.app/",
        },
        {
            title: "Personal Finance Tracker",
            description:
                "PENNYWISE is a personal finance tracker designed to help users effectively manage their income and expenses while providing insightful analytics about their financial health.",
            image: "images/pic5.png",
            link: "https://pennywise-frontend-y27l.onrender.com/",
        }
        // Add more projects here
    ];

    return (
        <div className="projects">
            <h1 data-aos="fade-up">My Projects</h1>
            <div className="projects-list">
                {projectData.map((project, index) => (
                    <div
                        className="project"
                        key={index}
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // Alternating animations
                    >
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="project-image"
                        />
                        <div className="project-details">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
