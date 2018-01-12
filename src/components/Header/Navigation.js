import React, {Component} from 'react';

export default class Navigation extends Component{
    render(){
        return(
            <div className="expanded">
                <button type="button" className="sm-hide md-hide lg-hide inline-block right-align m1 p0">
                    <span className="block col-12"> </span>
                    <span className="block mt1 col-12"> </span>
                    <span className="block mt1 col-12"> </span>
                </button>
                <ul className="list-reset block right xs-hide">
                    <li className="inline-block mx2"><a href="/" data-hover="About"> About </a></li>
                    <li className="inline-block mx2"><a href="/" data-hover="Projects"> Projects </a></li>
                    <li className="inline-block mx2"><a href="/" data-hover="Contact"> Contact </a></li>
                </ul>
            </div>
        )
    }
}