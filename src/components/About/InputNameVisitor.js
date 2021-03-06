import React, { Component } from "react";

export default class InputNameVisitor extends Component {
  render() {
    let formClasses =
      "formName max-width-4 relative mx-auto flex justify-center items-center flex-column animated fadeInDown";
    return (
      <form className={this.props._showForm ? this.props.formClass : formClasses}>
        <h1 className="h1 caps">
            Type your name to discover some magic!
        </h1>
        <input
          type="text"
          className="mt3"
          onKeyPress={this.props.handleSubmit}
          onChange={this.props.handleValue}
          onSubmit={this.props.handleSubmit}
        />
      </form>
    );
  }
}
