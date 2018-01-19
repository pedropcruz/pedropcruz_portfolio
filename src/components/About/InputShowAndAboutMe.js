import React, { Component } from "react";

export default class InputShowAndAboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roles: this.props.role,
      name: this.props.name,
      about: this.props.about,
      valueName: this.props.valueName
    };

    this.showRoles = this.showRoles.bind(this);
  }

  showRoles(roles) {
    return roles.map((role, index) => (
      <h2 key={"role_" + index} className="role h2 m0 caps">
        {role.prof}
      </h2>
    ));
  }

  render() {
    return (
      <div
        className={
          this.props._showForm ? "changedName display-none" : "changedName"
        }
      >
        <h1 className="h1 mt4 center relative mx-auto caps">
          Hello, {this.props.valueName}!
        </h1>
        <div className="relative clearfix">
          <article className="sm-col-12 md-col-12 lg-col-6 col-12 py3 px4 col-right">
            <h1 className="name caps">I'm {this.state.name}</h1>
            <div className="relative mt1 mb3">
              {this.showRoles(this.state.roles)}
            </div>
            <p className="text">{this.state.about}</p>
          </article>
        </div>
      </div>
    );
  }
}
