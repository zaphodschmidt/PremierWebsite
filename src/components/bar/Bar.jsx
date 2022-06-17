import "./bar.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingMedical} from '@fortawesome/free-solid-svg-icons';
import FaxIcon from '@mui/icons-material/Fax';

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
                            <FaxIcon fontSize="large"/>
                        </div>
                        <span>Fax: 559-781-5184</span>
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
