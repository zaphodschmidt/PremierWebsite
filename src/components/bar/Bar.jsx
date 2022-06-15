import "./bar.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingMedical,faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Bar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"Bar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="logo">
                        <FontAwesomeIcon icon={faHandHoldingMedical}></FontAwesomeIcon>
                        Premier Pathology
                    </div>
                    <div className="itemContainer">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </div>
                        <span>Email@here.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
