import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function Hero() {
    const words = ['Fullstack Development - MERN', 'Machine Learning', 'Problem Solving', 'React.js', 'Python'];

    return (
        <div className='container'>
            <motion.div
                className='row mt-5 mb-5 p-5'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Left side text */}
                <motion.div
                    className='col-8 p-5'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h3 style={{ lineHeight: "1.8" }}>Hello, I'm</h3>
                    <h1 style={{ lineHeight: "1.8", fontWeight: 'bolder' }}>Shaik Saniya Aara</h1>
                    <h2>
                        I am good at{' '}
                        <span style={{ color: 'cyan', fontWeight: 'bold' }}>
                            <Typewriter
                                words={words}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>

                    <div className='row mt-5'>
                        <span>
                            <a
                                href='https://www.linkedin.com/in/shaik-saniya-aara'
                                target='_blank'
                                rel='noreferrer'
                                className='mx-3'
                                style={{ color: 'rgb(60, 110, 218)', fontSize: '50px' }}
                            >
                                <i className='fa fa-linkedin-square' />
                            </a>
                            <a
                                href='https://github.com/Saniya-Aara20'
                                target='_blank'
                                rel='noreferrer'
                                className='mx-3 mt-3'
                                style={{ color: 'rgb(162, 175, 175)', fontSize: '50px' }}
                            >
                                <i className='fa fa-github-square' />
                            </a>
                            <a
                                href='https://leetcode.com/u/ShaikSaniyaAara/'
                                target='_blank'
                                rel='noreferrer'
                                className='mx-3'
                                style={{ color: 'rgb(218, 129, 13)', fontSize: '50px' }}
                            >
                                <i className='fa fa-code' />
                            </a>
                            <a
                                href='https://www.hackerrank.com/profile/saniyaaarashaik'
                                target='_blank'
                                rel='noreferrer'
                                className='mx-3'
                            >
                                <img
                                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png'
                                    alt='hackerrank'
                                    style={{ height: '50px', width: '50px', verticalAlign: 'text-bottom' }}
                                />
                            </a>
                            <br /><br />
                            <a
                                href='/My_Resume.pdf'
                                download='saniya_resume.pdf'
                                className='mt-2 p-3'
                                style={{ verticalAlign: 'text-bottom' }}
                            >
                                <button className='btn btn-info'>
                                    Download Resume &nbsp;
                                    <i className='fa fa-download' />
                                </button>
                            </a>
                        </span>
                    </div>
                </motion.div>

                {/* Right side image */}
                <motion.div
                    className='col-4 p-5'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <img
                        src='/MY_DP2.jpg'
                        alt='mydp'
                        style={{ height: '400px', width: '350px', borderRadius: '50%' }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Hero;
