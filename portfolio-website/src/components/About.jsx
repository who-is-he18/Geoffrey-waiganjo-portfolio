import React, { useEffect } from 'react';
import '../styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
    }, []);

    return (
        <div className="about">
            <div className="about-header" data-aos="fade-up">
                <h1>About Me</h1>
                <p>
                    Hi, I'm Geoffrey Waiganjo, a passionate software developer dedicated to solving real-world problems through code. 
                    I specialize in creating user-friendly applications with clean, maintainable code and a focus on scalability.
                </p>
            </div>

            <div className="about-content">
                {/* Professional Summary */}
                <div className="summary-section" data-aos="fade-right">
                    <h2>Professional Summary</h2>
                    <p>
                        My journey in software engineering began at Moringa School, where I developed a strong foundation in web development. 
                        Since then, I've contributed to projects like JobHive, an employment connection platform, and BikeHire, an eco-friendly bike rental service.
                    </p>
                </div>

                {/* Skills and Technologies */}
                <div className="skills-section" data-aos="fade-up">
                    <h2>Skills & Technologies</h2>
                    <div className="skills-grid">
                        <div className="skill-card" data-aos="flip-left">
                            <img src="https://ih1.redbubble.net/image.1468561932.1834/st,small,845x845-pad,1000x1000,f8f8f8.jpg" alt="Frontend Development" />
                            <h3>Frontend Development</h3>
                            <p>React, JavaScript, HTML, CSS</p>
                        </div>
                        <div className="skill-card" data-aos="flip-left">
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*IcTQj9rXJxLdtjL9ENUWJA.jpeg" alt="Backend Development" />
                            <h3>Backend Development</h3>
                            <p>Node.js, Flask, PostgreSQL</p>
                        </div>
                        <div className="skill-card" data-aos="flip-left">
                            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Version Control" />
                            <h3>Version Control</h3>
                            <p>Git & GitHub</p>
                        </div>
                        <div className="skill-card" data-aos="flip-left">
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*jM4Nenmq4DIoiEtSVLDjWg.png" alt="Other Tools" />
                            <h3>Other Tools</h3>
                            <p>REST APIs, Debugging Tools</p>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="achievements-section" data-aos="fade-left">
                    <h2>Achievements</h2>
                    <div className="achievements-cards">
                        <div className="achievement-card" data-aos="flip-left">
                            <img src="images/pic2.avif" alt="JobHive Project" />
                            <h3>JobHive</h3>
                            <p>
                                Developed a job-seeking platform connecting job seekers with employers, onboarding over 100 users in the first month.
                            </p>
                        </div>
                        <div className="achievement-card" data-aos="flip-left">
                            <img src="images/pic3.jpg" alt="BikeHire Project" />
                            <h3>BikeHire</h3>
                            <p>
                                Built an eco-friendly bike rental application with seamless booking and payment integration.
                            </p>
                        </div>
                        <div className="achievement-card" data-aos="flip-left">
                            <img src="images/pic4.png" alt="Portfolio Website" />
                            <h3>Portfolio Website</h3>
                            <p>
                                Designed and launched this responsive portfolio to showcase my projects, skills, and passion for software engineering.
                            </p>
                        </div>
                        <div className="achievement-card" data-aos="flip-left">
                            <img src="images/pic5.png" alt="Portfolio Website" />
                            <h3>Pennywise</h3>
                            <p>
                            PENNYWISE is a personal finance tracker designed to help users effectively manage their income and expenses while providing insightful analytics about their financial health.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="contact-section" data-aos="fade-up">
                    <h2>Let's Collaborate!</h2>
                    <p>
                        Whether you're looking for a software developer to bring your ideas to life or need someone to join your team, 
                        I'd love to work together.
                    </p>
                    <a href='/contact' className="contact-btn">Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default About;
