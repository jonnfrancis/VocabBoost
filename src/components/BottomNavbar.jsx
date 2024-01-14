import { useState } from 'react';
import { StatsModal, ShareModal, HomeModal } from '../components/Modal';
import stats from '../assets/bxs-dashboard.svg.svg';
import home from '../assets/bxs-store-alt.svg.svg';

const BottomNavBar = () => {
    const [showStatsModal, setShowStatsModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showHomeModal, setShowHomeModal] = useState(false); // Add state for the Home modal

    const openStatsModal = () => setShowStatsModal(true);
    const closeStatsModal = () => setShowStatsModal(false);

    const openShareModal = () => setShowShareModal(true);
    const closeShareModal = () => setShowShareModal(false);

    const openHomeModal = () => setShowHomeModal(true); // Function to open Home modal
    const closeHomeModal = () => setShowHomeModal(false); // Function to close Home modal

    return (
        <div className="bottom-navbar">
            <div className="nav-button" onClick={openStatsModal}>
                <img src={stats} alt="ViteVocab stats" />
            </div>
            <div className="nav-button" id="home" onClick={openHomeModal}> {/* Attach openHomeModal */}
                <img src={home} alt="ViteVocab home" />
            </div>
            <div className="nav-button" onClick={openShareModal}>
                <i className='bx bx-time-five'></i>
            </div>

            {/* Conditionally render modals */}
            {showStatsModal && <StatsModal onClose={closeStatsModal} />}
            {showShareModal && <ShareModal onClose={closeShareModal} />}
            {showHomeModal && <HomeModal onClose={closeHomeModal} />} {/* Render HomeModal */}
        </div>
    );
};

export default BottomNavBar;
