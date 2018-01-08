import React, {Component} from 'react';
import LogoImg from '../../logo.svg';


export default class Logo extends Component {
    render() {
        return (
            <a href="/">
                <figure>
                    <picture>
                        <img src={LogoImg} alt="" className="block fit"/>
                    </picture>
                </figure>
            </a>
        );
    }
}