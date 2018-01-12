import React, {Component} from 'react';
import AboutCSS from "./About.css";
import InputNameVisitor from '../components/About/InputNameVisitor';
import InputShowAndAboutMe from "../components/About/InputShowAndAboutMe";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const localStorageVariableName = "pedropcruz_inputvalue";

export default class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            role: [],
            about: "",
            inputValue: "",
            valueName: "",
            _showForm: true,
            animateClass: ' fadeInDown'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValue = this.handleValue.bind(this);
    }

    componentWillMount() {
        const show = localStorage.getItem(localStorageVariableName) !== null;
        this.setState({
            name: this.props.name,
            role: this.props.role,
            about: this.props.text,
            valueName: localStorage.getItem(localStorageVariableName) || "",
            _showForm: show,
        });
    }

    handleSubmit = (e) =>{
        if(e.key === 'Enter' ){
            localStorage.setItem(localStorageVariableName, this.state.inputValue);

            this.setState({
                inputValue: this.props.inputValue,
                valueName: this.props.valueName,
                animateClass: ' fadeInDown',
                _showForm: this.props._showForm
            });

            e.preventDefault();
        }
    };

    handleValue = (e) =>{
        this.setState({
            inputValue: e.target.value
        });
    };

    render() {
        return (
            <AboutCSS className="relative block">
                <InputNameVisitor inputValue={this.state.valueName}
                                  _showForm={this.state._showForm}
                                  handleSubmit={this.handleSubmit}
                                  handleValue={this.handleValue}
                                  animateClass={this.state.animateClass}/>
                <InputShowAndAboutMe role={this.state.role}
                                     name={this.state.name}
                                     about={this.state.about}
                                     valueName={this.state.valueName}
                                     _showForm={this.state._showForm}
                                     animateClass={this.state.animateClass}/>
                <SocialLinks newclass="right-align" />
            </AboutCSS>
        )
    }
}