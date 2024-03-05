import logo from '../assets/android-chrome-192x192.png';
import { useEffect, useState } from 'react'
import Advice from './Advice.jsx'

const StatsModal = ({ onClose }) => {
    return (
        <div id="home-overlay" className="modal-overlay">
            <div className="advice-modal">
                < Advice />
                <button id="advice-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const ShareModal = ({ onClose }) => {
    const [currentTime, setCurrentTime] = useState('12:00');
    const [currentDate, setCurrentDate] = useState('1 - January - 2024');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const time = new Date();
            const hours = time.getHours();
            const minutes = time.getMinutes().toString().padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);

            const month = time.toLocaleString('default', { month: 'long' });
            const year = time.getFullYear();
            const date = time.getDate();
            setCurrentDate(`${date} - ${month} - ${year}`);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="home-overlay" className="modal-overlay" onClick={onClose}>
            <div id='clock-modal' className="modal">
                <nav>
                    <div className="nav-logo">
                        <i className='bx bxs-timer clock-logo'></i>
                        <div className="nav-text">TIME</div>
                    </div>
                    <p id="yearContainer">{currentDate}</p>
                </nav>
                <div id="clockContainer">
                    <div className="clock-wrapper">
                        <div className="clock-inner">
                            <div id="timeContainer">{currentTime}</div>
                        </div>
                    </div>
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const HomeModal = ({ onClose }) => {
    return (
        <div id="home-overlay" className="modal-overlay" onClick={onClose}>
            <div id="home-modal" className="modal">
                <h2 className="modal-title">Welcome to ViteVocab!</h2>
                <p className="modal-desc">Keep scrolling until you have the 5 words on your screen right now memorized😃 . To get new words simply refresh the page by tapping on the logo below!</p>
                <div className="highlight">
                    <p className='highlight-text'>Learn. Grow. Excel.</p>
                    <small className="scroll-g">Simply start scrolling...</small>
                </div>
                <div className="logo-container">
                    <a href="/" rel="noopener noreferrer">
                        <img src={logo} alt="ViteVocab Logo" />
                    </a>
                </div>

                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export { StatsModal, ShareModal, HomeModal };
