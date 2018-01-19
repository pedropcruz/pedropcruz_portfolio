import React, { Component } from "react";
import AboutCSS from "./About.css";
import InputNameVisitor from "../components/About/InputNameVisitor";
import InputShowAndAboutMe from "../components/About/InputShowAndAboutMe";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const localStorageVariableName = "pedropcruz_inputvalue";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValue = this.handleValue.bind(this);
  }

  componentWillMount() {
    const show = localStorage.getItem(localStorageVariableName) !== null;
    this.setState({
      valueName: localStorage.getItem(localStorageVariableName) || "",
      _showForm: !show
    });
  }

  handleSubmit(e) {
    if (e.key === "Enter") {
      localStorage.setItem(localStorageVariableName, this.state.inputValue);
      this.setState({
        inputName: this.state.inputName,
        _showForm: false,
        valueName: localStorage.getItem(localStorageVariableName)
      });
      e.preventDefault();
    }
  }

  handleValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <AboutCSS className="relative block">
        <InputNameVisitor
          inputValue={this.state.valueName}
          _showForm={this.state._showForm}
          handleSubmit={this.handleSubmit}
          handleValue={this.handleValue}
        />
        <InputShowAndAboutMe
          role={this.props.role}
          name={this.props.name}
          about={this.props.about}
          inputValue={this.state.inputValue}
          valueName={this.state.valueName}
          _showForm={this.state._showForm}
        />
        <SocialLinks newclass="right-align" />
      </AboutCSS>
    );
  }
}
