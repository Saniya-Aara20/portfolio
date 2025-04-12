import React from 'react';
import './Projects.css';
function Projects() {
    return (
        <>
            <div className='container cnt'>
                <div className='container-fluid text-center fs-1 mb-5' style={{ fontWeight: "bold", color: "" }}>
                    PROJECTS
                </div>

                <div id="carouselExample" className="carousel slide mt-5 mb-5" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active text-center">
                            <img src="/airbnb.png" className="d-block mx-auto" style={{ width: "60%", maxHeight: "300px", objectFit: "contain" }} alt="Airbnb Project" />
                            <p>A full-stack Airbnb clone with EJS, featuring secure user auth, dynamic listings, and full CRUD powered by MongoDB.</p>
                            <a href='https://github.com/Saniya-Aara20/MERN-Airbnb' target="_blank" rel="noopener noreferrer" className='btn btn-danger mx-2'>View Project Code</a>
                            <a href='https://airbnb-project-chrm.onrender.com/listings' target="_blank" rel="noopener noreferrer" className='btn btn-danger mx-2'>Live Demo</a>
                        </div>

                        <div className="carousel-item text-center">
                            <img src="/blogs.png" className="d-block mx-auto" style={{ width: "60%", maxHeight: "300px", objectFit: "contain" }} alt="Blog App" />
                            <p>A simple blog app using EJS and Express with full CRUD operations, built without a database to focus on core backend logic.</p>
                            <a href='https://github.com/Saniya-Aara20/Blogs---EJS-Express-Nodejs' target="_blank" rel="noopener noreferrer" className='btn btn-danger'>View Project Code</a>
                        </div>

                        <div className="carousel-item text-center">
                            <img src="/chats.png" className="d-block mx-auto" style={{ width: "60%", maxHeight: "300px", objectFit: "contain" }} alt="Chat App" />
                            <p>A simple chat application built with EJS and MongoDB, implementing full CRUD operations for managing conversations and messages.</p>
                            <a href='https://github.com/Saniya-Aara20/Chats-Sample' target="_blank" rel="noopener noreferrer" className='btn btn-danger'>View Project Code</a>
                        </div>

                        <div className="carousel-item text-center">
                            <img src="/spotify.png" className="d-block mx-auto" style={{ width: "60%", maxHeight: "300px", objectFit: "contain" }} alt="Spotify Clone" />
                            <p>A sleek frontend clone of Spotify, built from scratch with HTML, CSS, and JS — capturing the vibe, layout, and feel of the real app.</p>
                            <a href='https://github.com/Saniya-Aara20/Spotify-Clone-Frontend' target="_blank" rel="noopener noreferrer" className='btn btn-danger'>View Project Code</a>
                        </div>

                        <div className="carousel-item text-center">
                            <img src="/simon.png" className="d-block mx-auto" style={{ width: "60%", maxHeight: "300px", objectFit: "contain" }} alt="Simon Game" />
                            <p>A classic Simon Game built with HTML, CSS, and JavaScript, showcasing interactive DOM manipulation and game logic.</p>
                            <a href='https://github.com/Saniya-Aara20/Simon-Game-JS' target="_blank" rel="noopener noreferrer" className='btn btn-danger'>View Project Code</a>
                        </div>

                        <div className="carousel-item text-center">
                            <img src="https://d14b9ctw0m6fid.cloudfront.net/ugblog/wp-content/uploads/2021/03/1986.png"
                                className="d-block mx-auto" style={{ width: "60%", maxHeight: "300px", objectFit: "contain" }} alt="Heart Disease ML" />
                            <p>ML model predicting heart disease risk using real health data — built for early diagnosis support.</p>
                            <a href='https://github.com/Saniya-Aara20/Heart-Disease-Prediction' target="_blank" rel="noopener noreferrer" className='btn btn-danger'>View Project Code</a>
                        </div>

                        <div className="carousel-item text-center">
                            <img src="https://assets-global.website-files.com/5fbe376a36d4106214faaf3c/6127f11ea022d75c6f326715_6-OpenGraphImage-InsuranceCosts.png"
                                className="d-block mx-auto" style={{ width: "60%", maxHeight: "300px", objectFit: "contain" }} alt="Insurance ML" />
                            <p>An RNN-powered model that predicts insurance claim outcomes based on customer history and policy data — leveraging sequential patterns for smarter risk assessment.</p>
                            <a href='https://github.com/Saniya-Aara20/insurance_RNN' target="_blank" rel="noopener noreferrer" className='btn btn-danger'>View Project Code</a>
                        </div>

                        <div className="carousel-item text-center">
                            <img src="https://static.packt-cdn.com/products/9781800200456/graphics/image/B16182_01_08.jpg"
                                className="d-block mx-auto" style={{ width: "60%", maxHeight: "300px", objectFit: "contain" }} alt="Cat vs Dog CNN" />
                            <p>A deep learning CNN model trained to accurately classify cat and dog images, showcasing image recognition with high precision.</p>
                            <a href='https://github.com/Saniya-Aara20/Cat-Vs-Dog-Image-Classification' target="_blank" rel="noopener noreferrer" className='btn btn-danger'>View Project Code</a>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Projects;
