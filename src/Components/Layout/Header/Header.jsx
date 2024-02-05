import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

    window.scroll(0, 0)

    return (
        <div className="header">
            <Link to={`/`} className="header__title">The Meal</Link>
        </div>
    );
};

export default Header;