import React, {Component} from "react";
import OverlayMenu from "../../containers/OverlayMenu";
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div className="expanded">
                <ul className="list-reset xs-hide sm-hide block">
                    <li className="inline-block mx2">
                        <Link to="/" data-hover="Home">
                            Home
                        </Link>
                    </li>
                    <li className="inline-block mx2">
                        <Link to="/resume" data-hover="Resume">
                            Resume
                        </Link>
                    </li>

                </ul>
                <OverlayMenu/>
            </div>
        );
    }
}
