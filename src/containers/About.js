import React, {Component} from 'react';
import AboutCSS from "./About.css";
import InputNameVisitor from '../components/About/InputNameVisitor';
import InputShowAndAboutMe from "../components/About/InputShowAndAboutMe";


export default class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            role: [],
            about: "",
            inputValue: "",
            valueName: "",
            _showForm: true
        };
    }

    componentWillMount() {
        const show = localStorage.getItem('nameValue') === null;
        this.setState({
            name: this.props.name,
            role: this.props.role,
            about: this.props.text,
            valueName: localStorage.getItem('nameValue') || "",
            _showForm: show
        });

        this.getComponent = this.getComponent.bind(this);
    }

    getComponent = () => {
        if (this.state._showForm) {
            return <InputNameVisitor inputValue={this.state.valueName}
                                     _showForm={this.state._showForm}/>;
        } else {
            return <InputShowAndAboutMe role={this.state.role}
                              name={this.state.name}
                              about={this.state.about}/>
        }
    };

    render() {
        return (
            <AboutCSS className="relative block">
                {this.getComponent()}
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