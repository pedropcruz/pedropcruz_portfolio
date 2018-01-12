import React, {Component} from 'react';

export default class OverlayMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            class: this.props.moreclass,
            addButton: this.props.button
        };

        this.closeButton = this.closeButton.bind(this);
    }

    closeButton = () => {
        console.log('click!');
    };

    render() {
        const classesForNavigation = "list-reset block right ";
        return (
            <ul className={this.state.class ? classesForNavigation + this.state.class : classesForNavigation}>
                {this.state.addButton ? <li className="inline-block mx2"><a className="close relative mx-auto block mb4" onClick={this.closeButton}> </a></li> : ""}
                <li className="inline-block mx2"><a href="/" data-hover="About"> About </a></li>
                <li className="inline-block mx2"><a href="/" data-hover="Projects"> Projects </a></li>
                <li className="inline-block mx2"><a href="/" data-hover="Contact"> Contact </a></li>
            </ul>
        )
    }
}