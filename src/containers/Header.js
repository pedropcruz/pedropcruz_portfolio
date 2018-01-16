import React, {Component} from 'react';
import {HeaderCSS} from './Header.css';
import Logo from '../components/Header/Logo';
import Navigation from "../components/Header/Navigation";

export default class Header extends Component{
    render(){
        return(
            <HeaderCSS className="relative py3 px4 flex justify-between items-center">
                <Logo/>
                <Navigation/>
            </HeaderCSS>
        )
    }
}
