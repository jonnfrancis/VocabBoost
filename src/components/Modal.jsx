import logo from '../assets/android-chrome-512x512.png';

const StatsModal = ({ onClose }) => {
    return (
        <div className="modal">
            <h2>Stats</h2>
            <p>Coming Soon</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

const ShareModal = ({ onClose }) => {
    return (
        <div className="modal">
            <h2>Share</h2>
            <p>Coming Soon</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

const HomeModal = ({ onClose }) => {
    return (
        <div id="home-overlay" className="modal-overlay" onClick={onClose}>
        <div id="home-modal" className="modal">
            <h2>Welcome to ViteVocab!</h2>
            <p>Boost your vocabulary and amplify your impact!</p>
            <div className="highlight">
                <p>Learn. Grow. Excel.</p>
                <small className="scroll-g">Simply start scrolling...</small>
            </div>
            <div className="logo-container">
                <img src={logo} alt="ViteVocab Logo" />
            </div>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
    );
};

export { StatsModal, ShareModal, HomeModal };
