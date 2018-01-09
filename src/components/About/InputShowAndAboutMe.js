import React, {Component} from 'react';

export default class InputShowAndAboutMe extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            role: [],
            about: "",
            valueName: localStorage.getItem('nameValue') || "",
            _showForm: localStorage.getItem('nameValue') === null
        };

        this.showRoles = this.showRoles.bind(this);
    }

    showRoles = (roles) => {
        return roles.map((role, index) => (
            <h2 key={'role_' + index} className="role h2 m0 caps">{role}</h2>
        ));
    };

    componentWillMount() {
        this.setState({
            name: this.props.name,
            role: this.props.role,
            about: this.props.about,
            valueName: localStorage.getItem('nameValue') || "",
        });
    }

    render() {
        return (
            <div className={!this.state.valueName ? 'changedName display-none' : 'changedName animated fadeInDown'}>
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
        )
    }
}