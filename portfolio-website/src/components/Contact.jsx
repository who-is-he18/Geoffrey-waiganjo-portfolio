import React, { useEffect } from 'react';
import '../styles/Contact.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Contact = () => {
    // Initialize AOS when component mounts
    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can change duration as needed
    }, []);

    return (
        <div className="contact">
            <h1 className="contact-header" data-aos="fade-up">Get in Touch</h1>
            <h2 className="contact-subheader" data-aos="fade-up" data-aos-delay="100">Reach Out Anytime</h2>
            <p className="contact-description" data-aos="fade-up" data-aos-delay="200">
                Feel free to contact me for collaborations or inquiries. I’m excited to connect!
            </p>

            <div className="contact-info">
                <div className="contact-item" data-aos="fade-left" data-aos-delay="300">
                    <i className="fas fa-envelope"></i>
                    <h3>Email Me</h3>
                    <p>You can reach me at <a href="mailto:geoffrey.waiganjo@example.com">geoffrey.waiganjo@example.com</a>. I look forward to your message!</p>
                </div>
                <div className="contact-item" data-aos="fade-left" data-aos-delay="400">
                    <i className="fas fa-phone-alt"></i>
                    <h3>Call Me</h3>
                    <p>For immediate inquiries, call me at <a href="tel:+254700123456">+254 700 123 456</a>. I'm here to help!</p>
                </div>
                <div className="contact-item" data-aos="fade-left" data-aos-delay="500">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Visit Me</h3>
                    <p>Find me at 1234 Kenyatta Avenue, Nairobi, Kenya. Let's meet and discuss!</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
