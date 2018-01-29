import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    console.log("click!");
  };

  render() {
    const classesForNavigation = "list-reset block right ";
    return (
        <ul
          className={
            this.state.class
              ? classesForNavigation + this.state.class
              : classesForNavigation
          }
        >
          {this.state.addButton ? (
            <li className="inline-block mx2">
              <a className="close relative mx-auto block mb4" onClick={this.closeButton}> </a>
            </li>
          ) : (
            ""
          )}
          <li className="inline-block mx2">
            <Link to="/resume" data-hover="Resumé">
              Resumé
            </Link>
          </li>
          <li className="inline-block mx2">
            <Link to="/projects" data-hover="Projects">
              Projects
            </Link>
          </li>
          <li className="inline-block mx2">
            <Link to="/contact" data-hover="Contact">
              Contact
            </Link>
          </li>
        </ul>        
    );
  }
}
