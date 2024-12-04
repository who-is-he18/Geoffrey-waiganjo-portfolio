import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <h1>About Me</h1>
                <p>
                    I'm [Your Name], a passionate developer with a strong foundation
                    in [Programming Languages/Technologies]. I have experience in
                    building web applications and constantly look for opportunities to
                    grow and improve my skills.
                </p>
                <h2>Skills & Technologies</h2>
                <ul className="skills-list">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>CSS, HTML</li>
                    <li>Git & GitHub</li>
                    <li>PostgreSQL</li>
                </ul>
                <button className="contact-btn">Contact Me</button>
            </div>
        </div>
    );
};

export default About;
