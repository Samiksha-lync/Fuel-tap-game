import React, { useState, useEffect, useRef } from "react";
import "./Homepage.css";

function Home() {
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0); 
    const [isAutoTapping, setIsAutoTapping] = useState(false);
    const intervalRef = useRef(null);

    const handleTap = () => {
        if (progress < 100) {
            setProgress(prevProgress => Math.min(prevProgress + 1, 100));
        }
        setCount(prevCount => prevCount + 1); 
    };

    const handleCheckboxChange = (event) => {
        setIsAutoTapping(event.target.checked);
    };

    useEffect(() => {
        if (isAutoTapping) {
            intervalRef.current = setInterval(handleTap, 1000); 
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current); 
    }, [isAutoTapping]);

    return (
        <div className="main-container">
            <div className="game-container">
                <div className="text-container">
                    <div className="text-1">Game has Started</div>
                    <div className="text-2">
                        Check the Wallet Page to see if rewards have been <br /> automatically claimed. If not, you can claim there.
                    </div>
                </div>

                <div className="tap-container">
                    <div className="counter">{count}</div>
                    <div className="tap-emoji" onClick={handleTap}>
                        <img src="tickel-emoji.png" alt="Tap Emoji" />
                    </div>
                    <div className="progress-container">
                        <div className="count">{count}</div>
                        <div className="progress-bar-container">
                            <div
                                className="progress-bar"
                                style={{ width: `${progress}%` }} // Ensure width is a percentage
                            ></div>
                        </div>
                        <div className="tap-image">
                            <img src="tickel-pointer.png" alt="Pointer" />
                        </div>
                    </div>
                </div>
                <div className="auto-tap">
                    <div className="auto-text">
                        Auto Taps
                    </div>
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox"
                        checked={isAutoTapping}
                        onChange={handleCheckboxChange}
                    />
                    <label className="switch" htmlFor="checkbox">
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="stats-container">
                    <div className="transactions">Total transactions:{" "}1,205,751</div>
                    <div className="accounts">Total accounts:{" "}130</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
