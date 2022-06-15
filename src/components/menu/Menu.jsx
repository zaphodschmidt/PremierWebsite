import { Outlet, Link } from "react-router-dom"
import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <>
            <div className={"menu " + (menuOpen && "active")}>
                <nav>
                    <ul>
                        <li onClick={() => setMenuOpen(false)}>
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <Link to="/clients">Order Supplies</Link>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <Link to="/aboutUs">About Us</Link>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <Link to="/staff">Staff</Link>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet/>
            </div>
        </>
    )
};