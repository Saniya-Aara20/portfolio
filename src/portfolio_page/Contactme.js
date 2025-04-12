import React from 'react';

function Contact() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container text-center">
                <h4 style={{ color: "rgb(105, 250, 56)" }}>Contact Me</h4>
                <p>Email: <a href="mailto:saniyaaarashaik@gmail.com" style={{ textDecoration: "none", color: "whitesmoke" }}>saniyaaarashaik@gmail.com</a></p>
                <p>Phone: <a href="tel:+91 90002 57975" style={{ textDecoration: "none", color: "whitesmoke" }}>+91 90002 57975</a></p>
                <p className="mt-3" style={{ color: "whitesmoke" }}>&copy; {new Date().getFullYear()} Shaik Saniya Aara. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Contact;
