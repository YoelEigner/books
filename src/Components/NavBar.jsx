import { useLocation } from "react-router-dom";

export const NavBar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === `/${path}`
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <a className="navbar-brand" href="/main">Books Are Us</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className={`nav-item nav-link ${isActive("main") ? "active" : ""}`} href="/main">Home</a>
                    <a className={`nav-item nav-link ${isActive("allbooks") ? "active" : ""}`} href="/allbooks">All Books</a>
                    <a className={`nav-item nav-link ${isActive("recommended") ? "active" : ""}`} href="/recommended">Recommended Books</a>
                </div>
            </div>
        </nav>
    )
}