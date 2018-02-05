import React, { Component } from "react";
import data from "../../resources/SocialLinks";

export default class SocialLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newclass: this.props.newclass,
      data: data
    };

    this.socialData = this.socialData.bind(this);
  }

  socialData(data) {
    return data.map((item, i) => (
      <li key={item.name + "__" + i} className="inline-block">
        <a className="mx4" href={item.url} to={item.url} target="_blank">
          {item.name}
        </a>
      </li>
    ));
  }

  render() {
    const classNames = "list-reset mx-auto center ";
    return (
      <div className="socialLinks relative">
        <ul
          className={
            this.state.newclass ? classNames + this.state.newclass : classNames
          }
        >
          {this.socialData(this.state.data)}
        </ul>
        <span className="scroll caps top-0 absolute">scroll</span>
      </div>
    );
  }
}
