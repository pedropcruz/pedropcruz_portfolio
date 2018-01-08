import React, {Component} from 'react';

export default class Navigation extends Component{
    render(){
        return(
            <ul className="list-reset block right">
                <li className="inline-block mx2"><a href="/" data-hover="About"> About </a></li>
                <li className="inline-block mx2"><a href="/" data-hover="Projects"> Projects </a></li>
                <li className="inline-block mx2"><a href="/" data-hover="Contact"> Contact </a></li>
            </ul>
        )
    }
}