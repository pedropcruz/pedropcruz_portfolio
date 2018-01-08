import React, {Component} from 'react';
import AboutCSS from "./About.css";

export default class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            role: [],
            about: "",
            inputValue: "",
            valueName: localStorage.getItem('nameValue') || "",
            _showForm: true
        };

        this.handleValue = this.handleValue.bind(this);
        this.showRoles = this.showRoles.bind(this);
    }

    componentDidMount() {
        const show = !localStorage.getItem('nameValue');
        this.setState({
            name: this.props.name,
            role: this.props.role,
            about: this.props.text,
            valueName: localStorage.getItem('nameValue') || "",
            _showForm: show
        });
    }

    handleValue = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };


    showRoles = (roles) => {
        return roles.map((role, index) => (
            <h2 key={'role_' + index} className="role h2 m0 caps">{role}</h2>
        ))
    };

    render() {
        return (
            <AboutCSS className="relative block">
                {this.state._showForm ? <FormName /> : null}
                <div className={!this.state.valueName ? 'changedName display-none' : 'changedName block'}>
                    <h1 className="h1 mt4 center relative mx-auto caps">Hello, {this.state.valueName}!</h1>
                    <div className="relative clearfix">
                        <article className="col-6 py3 px4 col-right">
                            <h1 className="name caps">I'm {this.state.name}</h1>
                            <div className="relative mt1 mb3">
                                {this.showRoles(this.state.role)}
                            </div>
                            <p className="text">{this.state.about}</p>
                        </article>
                    </div>
                </div>
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

export class FormName extends About{

    handleSubmit = (e) => {
        const $inputNameElement = document.querySelector('.changedName');

        if (e.key === 'Enter') {
            localStorage.setItem('nameValue', this.state.inputValue);
            this.setState({
               _showForm: true
            });
            e.preventDefault();
            $inputNameElement.classList.remove('display-none');
            $inputNameElement.classList.add('animated','fadeInDown');
        }
    };

    //FIQUEI AQUI!
    componentDidMount(){

    }

    render(){
        let formClasses = "formName max-width-4 relative mx-auto flex justify-center items-center flex-column";
        return(
            <form action=""
                  className={!this.state._showForm ? formClasses + ' animated fadeOutUp' : formClasses + ' animated fadeInDown'}>
                <h1 className="h1 caps">Please introduce your name to see some magic!</h1>
                <input type="text" className="mt3"
                       onKeyPress={this.handleSubmit}
                       onChange={this.handleValue}
                       value={this.state.inputValue}/>
            </form>
        );
    }
}