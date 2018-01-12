import React, {Component} from 'react';
import LogoBiggerScreens from '../../logo.svg';
import LogoForMobile from '../../logo_mobile.svg';


export default class Logo extends Component {
    render() {
        return (
            <a href="/">
                <figure className="xs-hide">
                    <picture>
                        <img src={LogoBiggerScreens} alt="Pedro Cruz Website" className="block fit"/>
                    </picture>
                </figure>
                <figure className="sm-hide md-hide lg-hide">
                    <picture>
                        <img src={LogoForMobile} alt="Pedro Cruz Website"/>
                    </picture>
                </figure>
            </a>

        );
    }
}