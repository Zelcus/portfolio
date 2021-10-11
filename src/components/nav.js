import * as React from "react";
import { Link } from "gatsby";
export const Navigator = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link exact to="/" activeClassName="isActive">
                        Home
                    </Link>
                </li>
                <li>
                    <Link exact to="/about" activeClassName="isActive">
                        About
                    </Link>
                </li>
                <li>
                    <Link exact to="/code" activeClassName="isActive">
                        Code
                    </Link>
                </li>
                <li>
                    <Link exact to="/music" activeClassName="isActive">
                        Music
                    </Link>
                </li>
                <li>
                    <Link exact to="/art" activeClassName="isActive">
                        Art
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
