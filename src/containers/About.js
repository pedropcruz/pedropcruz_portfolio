import React, {Component} from 'react';
import AboutCSS from "./About.css";
import InputNameVisitor from '../components/About/InputNameVisitor';
import InputShowAndAboutMe from "../components/About/InputShowAndAboutMe";

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
                animateClass: ' fadeInDown',
                _showForm: this.props._showForm
            });

            console.log(this.props);
            console.log(this.state);

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
                <div className="socialLinks relative mt4">
                    <ul className="list-reset mx-auto center right-align mt4">
                        <li className="inline-block"><a className="mx4" href="/">resume</a></li>
                        <li className="inline-block"><a className="mx4" href="/">facebook</a></li>
                        <li className="inline-block"><a className="mx4" href="/">twitter</a></li>
                        <li className="inline-block"><a className="mx4" href="/">instagram</a></li>
                        <li className="inline-block"><a className="mx4" href="/">behance</a></li>
                        <li className="inline-block"><a className="mx4" href="/">github</a></li>
                        <li className="inline-block"><a className="mx4" href="/">dribbble</a></li>
                    </ul>
                    <span className="scroll caps top-0 absolute">scroll</span>
                </div>
            </AboutCSS>
        )
    }
}