import React from 'react';
import './Certifications.css';
import CertificateCard from './CertificateCard';

const certificationsData = [
    {
        title: "Udemy Certified",
        items: [
            {
                text: "Python: Master Programming With 15 Projects",
                link: "https://drive.google.com/file/d/1h6_iKEvCiw9ciioTPzS8IuXiQQlG90TD/view?usp=sharing"
            },
            {
                text: "Machine Learning and Deep Learning A-Z: Hands on python",
                link: "https://drive.google.com/file/d/1vGDY9Q2P44ghhECwF7h3cPRkZrTz5mKF/view?usp=sharing"
            }
        ]
    },
    {
        title: "NPTEL Certified",
        items: [
            {
                text: "Database Management Systems",
                link: "https://drive.google.com/file/d/1TcSnzE1EMjgo_wHmAJDabts5JUCG0o6i/view?usp=sharing"
            },
            {
                text: "Programming, Data Structures and Algorithms Using Python",
                link: "https://drive.google.com/file/d/1f2qRX9cnoq4kYKwMUey7FQehujg4xxLt/view?usp=drive_link"
            },
            {
                text: "Data Science for Engineers",
                link: "https://drive.google.com/file/d/1xTe5wputScje2blzEE1MpsN4Dh1tBeDv/view?usp=drive_link"
            }
        ]
    },
    {
        title: "Coursera Certified",
        items: [
            {
                text: "Linux Fundamentals",
                link: "https://drive.google.com/file/d/1FLa978DxI_JChz7b-H-Ir7E3Ult3Z8Wl/view?usp=sharing"
            },
            {
                text: "Introduction to Software Engineering",
                link: "https://drive.google.com/file/d/1poAuc9u8qOoBqfcUSMT2iQsMcVqAdUui/view?usp=sharing"
            }
        ]
    },
    {
        title: "Cisco Certified",
        items: [
            {
                text: "Introduction to Networks",
                link: "https://drive.google.com/file/d/1WN10ddFJltxs0BZf7f2qdGXitUDr710e/view?usp=drive_link"
            },
            {
                text: "Introduction to Cyber Security",
                link: "https://drive.google.com/file/d/1TKsFdEN-Q32ntV2yVZPNpvPvEOFIrYoq/view?usp=sharing"
            },
            {
                text: "Cyber Security Essentials",
                link: "https://drive.google.com/file/d/11b80nb3kQ_RRhNAx6j-IbUGw6D70jUzK/view?usp=sharing"
            }
        ]
    },
    {
        title: "AWS Certified",
        items: [
            {
                text: "AWS Academy Graduate - AWS Academy Cloud Foundations",
                link: "https://drive.google.com/file/d/1IpdEbKK8Sn5CXsEe-OJiNoMXVxznZQy5/view?usp=sharing"
            },
            {
                text: "AWS Academy Graduate - AWS Academy Cloud Data Pipeline Builder",
                link: "https://drive.google.com/file/d/1xr51RfB8rwbecXSHFq_8dKxn-Zz3pqVc/view?usp=sharing"
            },
            {
                text: "AWS Academy Graduate - AWS Academy Cloud Web Application Builder",
                link: "https://drive.google.com/file/d/15txJl9uj1Ado5Xi_i_QyIGcpkIUm96AP/view?usp=sharing"
            }
        ]
    }
];

function Certifications() {
    return (
        <>
            <div className='container cnt'>
                <div className='container-fluid text-center fs-1 mb-5' style={{ fontWeight: "bold" }}>
                    CERTIFICATIONS
                </div>

                <div className='d-flex flex-wrap justify-content-center gap-4 p-4 row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                    {certificationsData.map((cert, index) => (
                        <CertificateCard key={index} title={cert.title} items={cert.items} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Certifications;
