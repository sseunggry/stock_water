import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                stock
                {/*<img src="" alt="logo"/>*/}
            </Link>
            
            <div className="menu">
                <i className="icon icon-menu"></i>
                <div className="menu-list">
                    <div className="menu-item">
                        <p>menu</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;