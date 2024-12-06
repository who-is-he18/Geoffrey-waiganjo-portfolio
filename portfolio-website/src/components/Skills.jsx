import React, { useEffect } from 'react';
import '../styles/Skills.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const skillsData = [
  {
    title: 'Mastering HTML Structure',
    description:
      'Geoffrey has a strong foundation in HTML, enabling him to create well-structured and semantic web pages.',
    imgSrc: 'https://10web-site.ai/124/wp-content/uploads/sites/136/2024/12/tenweb_media_pawfuzjZ.webp',
  },
  {
    title: 'Expert in CSS Design',
    description:
      'With CSS, Geoffrey crafts visually appealing and responsive designs, enhancing user experience across devices.',
    imgSrc: 'https://10web-site.ai/124/wp-content/uploads/sites/136/2024/12/tenweb_media_CtrJrXfM.webp',
  },
  {
    title: 'JavaScript for Interactivity',
    description:
      'Geoffrey utilizes JavaScript to add dynamic features and interactivity, making web applications more engaging.',
    imgSrc: 'https://10web-site.ai/124/wp-content/uploads/sites/136/2024/12/tenweb_media_HI6sOgan.webp',
  },
  {
    title: 'Proficient in React Development',
    description:
      'Geoffrey builds efficient and scalable web applications using React, focusing on component-based architecture.',
    imgSrc: 'https://10web-site.ai/124/wp-content/uploads/sites/136/2024/12/tenweb_media_KMUdtqQL.webp',
  },
];

const Skills = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="skills">
      <h2 data-aos="fade-up">Technical Proficiencies</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Geoffrey excels in HTML, CSS, JavaScript, React, Python, and Flask, showcasing his ability to build dynamic and responsive applications.
      </p>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Delay each card based on its index
          >
            <img src={skill.imgSrc} alt={skill.title} className="skill-image" />
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
