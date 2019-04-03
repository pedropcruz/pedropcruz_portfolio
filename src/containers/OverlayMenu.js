import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactModal from 'react-modal';

export default class OverlayMenu extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        })
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={this.openModal}
                    className="md-hide lg-hide inline-block right-align m1 p0">
                    <span className="block col-12"> </span>
                    <span className="block mt1 col-12"> </span>
                    <span className="block mt1 col-12"> </span>
                </button>
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    appElement={document.getElementById('root')}
                    className="overlayModal"
                    overlayClassName="overlay"
                >
                    <ul>
                        <li className="inline-block mx2">
                            <a className="close relative mx-auto block mb4"
                               onClick={this.closeModal}>
                            </a>
                        </li>
                        <li className="inline-block mx2">
                            <Link to="/" data-hover="Home">
                                Home
                            </Link>
                        </li>
                        <li className="inline-block mx2">
                            <Link to="/resume" data-hover="Resume">
                                Resume
                            </Link>
                        </li>
                        {/* TODO: New Components for these pages in the future*/}
                        {/*<li className="inline-block mx2">
                          <Link to="/projects" data-hover="Projects">
                            Projects
                          </Link>
                        </li>
                        <li className="inline-block mx2">
                          <Link to="/contact" data-hover="Contact">
                            Contact
                          </Link>
                        </li>*/}
                    </ul>
                </ReactModal>
            </div>
        );
    }
}
