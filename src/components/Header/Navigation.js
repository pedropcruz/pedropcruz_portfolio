import React, {Component} from "react";
import OverlayMenu from "../../containers/OverlayMenu";
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div className="expanded">
                <ul className="list-reset xs-hide sm-hide">
                    <li>
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
