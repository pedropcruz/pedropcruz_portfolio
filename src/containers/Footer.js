import React , {Component} from 'react';
import FooterCSS from './Footer.css';
import SocialLinks from '../components/SocialLinks/SocialLinks';

export default class Footer extends Component{
    render(){
        return(
            <FooterCSS>
                <div className="footer relative center align-middle flex flex-column justify-center">
                    <p>To get in touch, write to</p>
                    <a href="mailto:pedropcruz@pedropcruz.pt">pedropcruz@pedropcruz.pt</a>
                </div>
                <SocialLinks />
            </FooterCSS>
        );
    }
}