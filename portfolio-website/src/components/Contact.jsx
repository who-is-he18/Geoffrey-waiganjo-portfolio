import React, { useState } from 'react';
import '../styles/Contact.css';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message Sent!'); // You can replace this with an actual API call
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="contact-btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
