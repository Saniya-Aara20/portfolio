import React from 'react';

function CertificateCard({ title, items }) {
    return (

        <div className="card mb-5" style={{
            width: '30rem',
            background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
            color: "#ffffff",
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',
            height: '100%'
        }}>
            <div className="card-body">
                <h3 className="card-title p-2">{title}</h3>
                {items.map((item, idx) => (
                    <p key={idx} className="card-text p-2">
                        ✔️ {item.text} (
                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "rgb(210, 202, 202)" }}>
                            Verify
                        </a>)
                    </p>
                ))}
            </div>
        </div>

    );
}

export default CertificateCard;
