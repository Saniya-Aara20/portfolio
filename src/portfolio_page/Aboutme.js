import React from 'react';

function About() {
    return (
        <div className="container py-4">
            <h2 className="text-center mb-4" style={{
                color: "white",
                fontSize: '2.5rem',
                fontWeight: 'bold'
            }}>
                ABOUT ME
            </h2>

            <div className="rounded shadow" style={{
                border: '4px solid white',
                borderRadius: "12px",
                background: "linear-gradient(to right, #ff6a00, #ee0979)",
                color: '#f8f8f2',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                padding: '1.5rem',
                fontSize: '1.1rem',
                lineHeight: '1.7',
            }}>
                <p className="mb-3">
                    Hello! I’m Saniya, a passionate and curious Computer Science undergrad, currently diving deep into Full Stack Development and Machine Learning.
                    I love building clean, responsive web apps that solve real problems — from frontend design to backend APIs.
                </p>
                <p className="mb-3">
                    I’ve built multiple projects using the MERN stack and I’m currently exploring deployment, API integration, and performance optimization.
                    I also enjoy working with data — analyzing it, visualizing it, and drawing insights using Python and ML tools.
                </p>
                <p>
                    Apart from tech, I value clarity, growth, and creativity. Whether it’s crafting a UI, solving a tricky bug, or explaining a concept —
                    I believe in consistency, learning by doing, and making ideas real.
                </p>
            </div>
        </div>
    );
}

export default About;
