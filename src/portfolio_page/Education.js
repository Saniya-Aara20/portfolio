import React from 'react';

function Education() {
    return (<>

        <div className='container cnt'>
            <div className='container-fluid text-center fs-2 mb-3' style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                color: "white",
            }}>EDUCATION</div>
            <div style={{
                border: '5px solid white',
                borderRadius: "10px",
                background: "linear-gradient(to right, #5f2c82, #49a09d)"

            }}>
                <p className='fs-4 p-5 text-white text-center'>
                    <img src='/sruLogo.jpeg' alt='srlogo' style={{ width: "10%" }}></img>
                    <br /><br />
                    <strong>Bachelor of Technology</strong><br />
                    Computer Science and Engineering<br />
                    SR University, Warangal<br />
                    CGPA : 9.56<br />
                    2022 - 2026
                </p>
            </div>

        </div>
    </>);
}

export default Education;
