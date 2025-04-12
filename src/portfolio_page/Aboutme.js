import React from 'react';
function About() {
    return (<>

        <div className='container cnt'>
            <div className='container-fluid text-center fs-2 mb-3' style={{
                color: "white",
                fontSize: '3rem',
                fontWeight: 'bold'
            }}>ABOUT ME</div>
            <div style={{
                border: '5px solid white', borderRadius: "10px", background: "linear-gradient(to right, #ff6a00, #ee0979)", color: '#f8f8f2', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
            }}>
                <p className='fs-5 p-5'>
                    Hello! I’m Saniya, a passionate and curious Computer Science undergrad, currently diving deep into Full Stack Development and Machine Learning.
                    I love building clean, responsive web apps that solve real problems — from frontend design to backend APIs.
                    <br /><br />
                    I’ve built multiple projects using the MERN stack and I’m currently exploring deployment, API integration, and performance optimization.
                    I also enjoy working with data — analyzing it, visualizing it, and drawing insights using Python and ML tools.
                    <br /><br />
                    Apart from tech, I value clarity, growth, and creativity. Whether it’s crafting a UI, solving a tricky bug, or explaining a concept —
                    I believe in consistency, learning by doing, and making ideas real.

                </p>
            </div>

        </div>
    </>);
}

export default About;