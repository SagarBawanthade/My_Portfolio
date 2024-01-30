import React from 'react';
import '../../src/App.css';

const Contact = () => {




    return (
        <div id="contact">
            <h2>Contact Us</h2>
            <form className='contact-form'>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"

                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"

                />
                <label htmlFor="message">Message:</label>
                <textarea
                ></textarea>
                <button id="btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
