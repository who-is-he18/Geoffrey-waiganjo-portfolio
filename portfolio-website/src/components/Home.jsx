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
            <br></br>
            <br></br>
            <br></br>

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
        </div>
    );
};

export default Home;
