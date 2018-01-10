import React, {Component} from 'react';

export default class InputShowAndAboutMe extends Component{
    constructor(props) {
        super(props);

        this.state = {
            roles : this.props.role,
            inputValue: this.props.inputValue,
            name: this.props.name,
            about: this.props.about,
            valueName: this.props.valueName,
            _showForm: this.props._showForm,
            animateClass: ' fadeInDown'
        };

        console.log(this.state);

        this.showRoles = this.showRoles.bind(this);
    }

    showRoles = (roles) => {
        return roles.map((role, index) => (
            <h2 key={'role_' + index} className="role h2 m0 caps">{role}</h2>
        ));
    };

    render() {
        return (
        <div className={!this.state._showForm ? 'changedName display-none' : 'changedName animated' + this.state.animateClass}>
                <h1 className="h1 mt4 center relative mx-auto caps">Hello, {this.state.valueName}!</h1>
                <div className="relative clearfix">
                    <article className="col-6 py3 px4 col-right">
                        <h1 className="name caps">I'm {this.state.name}</h1>
                        <div className="relative mt1 mb3">
                            {this.showRoles(this.state.roles)}
                        </div>
                        <p className="text">{this.state.about}</p>
                    </article>
                </div>
            </div>
        )
    }
}