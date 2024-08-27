import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <a href="https://x.com/Lyncworld" className="twitter" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30" style={{ width: '30px' }}>
                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
            </a>
            <div className="middle-section">
                <div className="item1">2024</div>
                <div className="item2">TapToEarn</div>
            </div>
            <div className="right-section">
                <div className="item-1">Terms of Service</div>
                <div className="item-2">Privacy Policy</div>
            </div>
        </div>
    );
}

export default Footer;
