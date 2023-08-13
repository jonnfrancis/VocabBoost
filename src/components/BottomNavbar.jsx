import back from '../assets/bx-rewind.svg.svg'
import front from '../assets/bx-fast-forward.svg.svg'
import home from '../assets/bxs-store-alt.svg.svg'

const BottomNavBar = () => {
    return (
        <div className="bottom-navbar">
            <div className="nav-button">
                <img src={back} alt="rewind" />
            </div>
            <div className="nav-button" id="home">
                <img src={home} alt="rewind" />
            </div>
            <div className="nav-button">
                <img src={front} alt="rewind" />
            </div>
        </div>
    );
};

export default BottomNavBar;
