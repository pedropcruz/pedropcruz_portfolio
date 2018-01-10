import React, {Component} from 'react';

export default class InputNameVisitor extends Component{

    constructor(props) {
        super(props);

        this.state = {
            haveInput: this.props.inputValue,
            handleSubmit: this.props.handleSubmit,
            handleValue: this.props.handleValue,
            _showForm: this.props._showForm,
            animateClass: ' fadeInDown'
        };
    }

    render() {
        let formClasses = "formName max-width-4 relative mx-auto flex justify-center items-center flex-column animated";
        return (
            <form action=""
                  className={!this.state._showForm ? formClasses + this.state.animateClass : 'display-none'}>
                <h1 className="h1 caps">Please introduce your name to see some magic!</h1>
                <input type="text" className="mt3"
                        onKeyPress={this.state.handleSubmit}
                        onChange={this.state.handleValue}
                        onSubmit={this.state.handleSubmit}/>
            </form>
        );
    }
}