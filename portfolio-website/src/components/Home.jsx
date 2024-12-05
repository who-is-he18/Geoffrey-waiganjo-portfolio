import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-content">
                    <h1 className="home-title">
                        Welcome to <span className="highlight">Geoffrey's</span> Portfolio
                    </h1>
                    <p className="home-description">
                        Discover the journey of Geoffrey Waiganjo, a dedicated software engineer with a passion for creating impactful solutions. Explore his projects and skills, and connect to collaborate on exciting opportunities.
                    </p>
                    <div className="home-buttons">
                        <a href="/projects" className="btn btn-solid">View Projects</a>
                        <a href="/contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className="about-section">
                <div className="about-content">
                    <h2>Meet Geoffrey Waiganjo</h2>
                    <p>
                        I am a software engineer with a passion for creating innovative solutions. My journey began at Moringa School, where I developed skills in HTML, CSS, JavaScript, React, Python, and Flask. I thrive on challenges and love to learn.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>I have completed numerous projects that showcase my ability to solve real-world problems through technology.</p>
                        </div>
                        <div className="stat-item">
                            <h3>5 projects</h3>
                            <p>My projects include JobHive, a platform connecting job seekers with employers, and BikeHire, which simplifies bike rentals.</p>
                        </div>
                        <div className="stat-item">
                            <h3>3 languages</h3>
                            <p>I am proficient in various programming languages, including JavaScript and Python, which I use to build dynamic applications.</p>
                        </div>
                        <div className="stat-item">
                            <h3>2 frameworks</h3>
                            <p>I have experience with frameworks like React and Flask, enabling me to create robust web applications.</p>
                        </div>
                    </div>
                </div>
                <div className="about-image-container">
                    <img
                        src="https://img.freepik.com/free-vector/storyboard-concept-illustration_114360-6426.jpg"
                        alt="Geoffrey Waiganjo"
                        className="about-image"
                    />
                </div>
            </div>

            {/* Showcasing My Work Section */}
<div className="projects-section">
    <h2 className="projects-title">Showcasing My Work</h2>
    <p className="projects-description">
        Explore the innovative projects I've developed, each designed to solve real-world problems and enhance user experiences.
    </p>

    <div className="projects-grid">
        {/* JobHive Application */}
        <div className="project-card">
            <div className="project-image">
                <img src="https://10web-site.ai/124/wp-content/uploads/sites/136/2024/12/tenweb_media_D2rw6KnW.webp" alt="JobHive Application" />
            </div>
            <div className="project-details">
                <h3 className="project-title">JobHive Application</h3>
                <p className="project-description">
                    JobHive is a platform connecting employers with job seekers, streamlining the hiring process and enhancing user experience.
                </p>
                <ul className="project-meta">
                    <li><strong>Launch Date:</strong> September 2023</li>
                    <li><strong>Technologies:</strong> React, Flask</li>
                    <li><strong>Features:</strong> User-friendly interface, powerful search functionalities</li>
                </ul>
                <a href="/jobhive" className="btn btn-solid">Learn More</a>
            </div>
        </div>

        {/* BikeHire Application */}
        <div className="project-card">
            <div className="project-image">
                <img src="https://10web-site.ai/124/wp-content/uploads/sites/136/2024/12/tenweb_media_tAPnS8Dm.webp" alt="BikeHire Application" />
            </div>
            <div className="project-details">
                <h3 className="project-title">BikeHire Application</h3>
                <p className="project-description">
                    BikeHire simplifies bike rentals, promoting eco-friendly transportation and providing a seamless user experience.
                </p>
                <ul className="project-meta">
                    <li><strong>Launch Date:</strong> August 2023</li>
                    <li><strong>Technologies:</strong> JavaScript, Node.js</li>
                    <li><strong>Features:</strong> Easy booking, payment integration</li>
                </ul>
                <a href="/bikehire" className="btn btn-solid">Learn More</a>
            </div>
        </div>

        {/* Portfolio Website */}
        <div className="project-card">
            <div className="project-image">
                <img src="https://10web-site.ai/124/wp-content/uploads/sites/136/2024/12/tenweb_media_kz1YhB5j.webp" alt="Portfolio Website" />
            </div>
            <div className="project-details">
                <h3 className="project-title">Portfolio Website</h3>
                <p className="project-description">
                    This portfolio website showcases my work and growth as a developer. It highlights my projects, skills, and personal journey in the tech industry.
                </p>
                <ul className="project-meta">
                    <li><strong>Launch Date:</strong> July 2023</li>
                    <li><strong>Technologies:</strong> HTML, CSS, JavaScript</li>
                    <li><strong>Features:</strong> Project showcase, responsive design</li>
                </ul>
                <a href="/portfolio" className="btn btn-solid">Learn More</a>
            </div>
        </div>
    </div>
</div>


            {/* Technologies Section */}
            <div className="technologies-section">
                <h2>Mastering Modern Technologies for Innovative Solutions</h2>
                <p>
                    Geoffrey Waiganjo is proficient in a range of technologies that empower him to create impactful software solutions. His expertise spans HTML, CSS, JavaScript, React, Python, and Flask, enabling him to build dynamic and responsive applications.
                </p>
                <div className="technologies-cards">
                    <div className="technology-card">
                        <img src="https://10web-site.ai/124/wp-content/uploads/sites/136/2024/12/tenweb_media_ah1Yn1U1.webp" alt="Front-End Development" />
                        <h3>Front-End Development Expertise</h3>
                        <p>
                            Geoffrey excels in creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript. His skills ensure seamless user experiences across various devices.
                        </p>
                        <a href="#learn-more" className="btn btn-outline">Learn More</a>
                    </div>
                    <div className="technology-card">
                        <img src="https://10web-site.ai/124/wp-content/uploads/sites/136/2024/12/tenweb_media_x6hGYHEk.webp" alt="React and Python" />
                        <h3>React and Python Proficiency</h3>
                        <p>
                            With a strong command of React and Python, Geoffrey builds robust and scalable applications. His ability to integrate these technologies enhances functionality and performance.
                        </p>
                        <a href="#learn-more" className="btn btn-outline">Learn More</a>
                    </div>
                    <div className="technology-card">
                        <img src="https://10web-site.ai/124/wp-content/uploads/sites/136/2024/12/tenweb_media_6qLpYmAQ.webp" alt="Flask for Back-End Solutions" />
                        <h3>Flask for Back-End Solutions</h3>
                        <p>
                            Geoffrey leverages Flask to develop efficient back-end solutions, ensuring secure and reliable server-side operations. His expertise supports the seamless integration of front-end and back-end systems.
                        </p>
                        <a href="#learn-more" className="btn btn-outline">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
