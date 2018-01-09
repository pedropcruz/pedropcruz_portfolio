import React, {Component} from 'react';

export default class InputNameVisitor extends Component{
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            _showForm: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValue = this.handleValue.bind(this);
    }

    handleSubmit = (e) => {
        if (e.key === 'Enter') {
            localStorage.setItem('nameValue', this.state.inputValue);
            debugger;
            this.setState({
                _showForm: true
            });
            e.preventDefault();
            return <AboutText _showForm={!this.state._showForm}/>
        }
    };

    handleValue = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    };

    componentWillMount() {
        if (this.state.inputValue === localStorage.getItem('nameValue')) {
            this.setState({_showForm: false});
        }
    }

    render() {
        let formClasses = "formName max-width-4 relative mx-auto flex justify-center items-center flex-column";
        return (
            <form action=""
                  className={!this.state._showForm ? formClasses + ' animated fadeInDown' : formClasses + ' animated fadeOutUp'}>
                <h1 className="h1 caps">Please introduce your name to see some magic!</h1>
                <input type="text" className="mt3"
                       onKeyPress={this.handleSubmit}
                       onChange={this.handleValue}
                       value={this.state.inputValue}/>
            </form>
        );
    }
}