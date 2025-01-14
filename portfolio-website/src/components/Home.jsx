import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="home">
            <div className="home-container">
                <div className="home-content" data-aos="fade-up">
                    <h1 className="home-title">
                        Welcome to <span className="highlight">Geoffrey's</span> Portfolio
                    </h1>
                    <p className="home-description" data-aos="fade-up" data-aos-delay="300">
                        Discover the journey of Geoffrey Waiganjo, a dedicated software engineer with a passion for creating impactful solutions. Explore his projects and skills, and connect to collaborate on exciting opportunities.
                    </p>
                    <div className="home-buttons">
                        <a href="/projects" className="btn btn-outline" data-aos="fade-up" data-aos-delay="500">View Projects</a>
                        <a href="/contact" className="btn btn-outline" data-aos="fade-up" data-aos-delay="700">Contact Me</a>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* About Section */}
            <div className="about-section" data-aos="fade-up">
                <div className="about-content">
                    <h2>Meet Geoffrey Waiganjo</h2>
                    <p>
                        I am a software engineer with a passion for creating innovative solutions. My journey began at Moringa School, where I developed skills in HTML, CSS, JavaScript, React, Python, and Flask. I thrive on challenges and love to learn.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item" data-aos="fade-right">
                            <h3>100%</h3>
                            <p>I have completed numerous projects that showcase my ability to solve real-world problems through technology.</p>
                        </div>
                        <div className="stat-item" data-aos="fade-left">
                            <h3>5 projects</h3>
                            <p>My projects include JobHive, a platform connecting job seekers with employers, and BikeHire, which simplifies bike rentals.</p>
                        </div>
                        <div className="stat-item" data-aos="fade-up">
                            <h3>3 languages</h3>
                            <p>I am proficient in various programming languages, including JavaScript and Python, which I use to build dynamic applications.</p>
                        </div>
                        <div className="stat-item" data-aos="fade-down">
                            <h3>2 frameworks</h3>
                            <p>I have experience with frameworks like React and Flask, enabling me to create robust web applications.</p>
                        </div>
                    </div>
                </div>
                <div className="about-image-container">
                    <img
                        src="/images/pic1.avif"
                        alt="Geoffrey Waiganjo"
                        className="about-image"
                    />
                </div>
            </div>

            {/* Projects Section */}
            <div className="projects-section" data-aos="fade-up">
                <h2 className="projects-title">Showcasing My Work</h2>
                <p className="projects-description">
                    Explore the innovative projects I've developed, each designed to solve real-world problems and enhance user experiences.
                </p>

                <div className="projects-grid">
                    <div className="project-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="project-image">
                            <img src="/images/pic2.avif" alt="JobHive Application" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">JobHive Application</h3>
                            <p className="project-description">
                                JobHive is a platform connecting employers with job seekers, streamlining the hiring process and enhancing user experience.
                            </p>
                            <a href="https://github.com/who-is-he18/JobHive" className="btn btn-solid" target="_blank" rel="noopener noreferrer">View on Github</a>
                        </div>
                    </div>

                    <div className="project-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="project-image">
                            <img src="/images/pic3.jpg" alt="BikeHire Application" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">BikeHire Application</h3>
                            <p className="project-description">
                                BikeHire simplifies bike rentals, promoting eco-friendly transportation and providing a seamless user experience.
                            </p>
                            <a href="https://github.com/who-is-he18/Bike-Hire" className="btn btn-solid">View on Github</a>
                        </div>
                    </div>

                    <div className="project-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="project-image">
                            <img src="images/pic4.png" alt="Portfolio Website" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">Portfolio Website</h3>
                            <p className="project-description">
                                This portfolio website showcases my work and growth as a developer. It highlights my projects, skills, and personal journey in the tech industry.
                            </p>
                            <a href="https://github.com/who-is-he18/Geoffrey-waiganjo-portfolio" className="btn btn-solid">View on Github</a>
                        </div>
                    </div>
                    <div className="project-card" data-aos="fade-up" data-aos-delay="700">
                        <div className="project-image">
                            <img src="images/pic5.png" alt="Portfolio Website" />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">Pennywise </h3>
                            <p className="project-description">
                            PENNYWISE is a personal finance tracker designed to help users effectively manage their income and expenses while providing insightful analytics about their financial health.
                            </p>
                            <a href="https://github.com/who-is-he18/pennywise" className='btn btn-solid'>View on Github</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technologies Section */}
            <div className="technologies-section" data-aos="fade-up">
                <h2>Mastering Modern Technologies for Innovative Solutions</h2>
                <p>
                    Geoffrey Waiganjo is proficient in a range of technologies that empower him to create impactful software solutions. His expertise spans HTML, CSS, JavaScript, React, Python, and Flask, enabling him to build dynamic and responsive applications.
                </p>
                <div className="technologies-cards">
                    <div className="technology-card" data-aos="fade-right">
                        <img src="images/pic6.avif" alt="Front-End Development" />
                        <h3>Front-End Development Expertise</h3>
                        <p>
                            Geoffrey excels in creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript. His skills ensure seamless user experiences across various devices.
                        </p>
                        <a href="/skills" className="btn btn-outline">Learn More</a>
                    </div>
                    <div className="technology-card" data-aos="fade-left">
                        <img src="images/pic7.avif" alt="React and Python" />
                        <h3>React and Python Proficiency</h3>
                        <p>
                            With a strong command of React and Python, Geoffrey builds robust and scalable applications. His ability to integrate these technologies enhances functionality and performance.
                        </p>
                        <a href="/skills" className="btn btn-outline">Learn More</a>
                    </div>
                    <div className="technology-card" data-aos="fade-up">
                        <img src="images/pic8.jpeg" alt="Flask for Back-End Solutions" />
                        <h3>Flask for Back-End Solutions</h3>
                        <p>
                            Geoffrey leverages Flask to develop efficient back-end solutions, ensuring secure and reliable server-side operations. His expertise supports the seamless integration of front-end and back-end systems.
                        </p>
                        <a href="/skills" className="btn btn-outline">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
