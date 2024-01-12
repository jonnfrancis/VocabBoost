import logo from '../assets/android-chrome-192x192.png';

const StatsModal = ({ onClose }) => {
    return (
        <div id="home-overlay" className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <h2>Stats</h2>
                <p>Coming Soon</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const ShareModal = ({ onClose }) => {
    return (
        <div id="home-overlay" className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <h2>Share</h2>
                <p>Coming Soon</p>
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
