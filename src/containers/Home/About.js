import React, { Component } from "react";
import AboutCSS from "./About.css";
import InputNameVisitor from "../../components/About/InputNameVisitor";
import InputShowAndAboutMe from "../../components/About/InputShowAndAboutMe";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const localStorageVariableName = "pedropcruz_inputvalue";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _showForm: props._showForm,
      formClass: 'display-none'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValue = this.handleValue.bind(this);
  }

  componentWillMount() {
    const show = !!localStorage.getItem(localStorageVariableName);
    this.setState({
      valueName: localStorage.getItem(localStorageVariableName) || "",
      _showForm: !show
    });
    this.initFormClass();
  }

  handleSubmit(e) {
    if (e.key === "Enter") {
      localStorage.setItem(localStorageVariableName, this.state.inputValue);
      this.setState({
        inputName: this.state.inputName,
        _showForm: false,
        formClass: "animated fadeOutUp",
        valueName: localStorage.getItem(localStorageVariableName)
      });
      e.preventDefault();
    }
  }

  initFormClass(){
    const formClasses = "formName max-width-4 relative mx-auto flex justify-center items-center flex-column animated fadeInDown";
    this.setState({
      formClass: ((this.state._showForm)? formClasses : 'display-none')
    });
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
          _showForm={!this.state._showForm}
          handleSubmit={this.handleSubmit}
          handleValue={this.handleValue}
          formClass={this.state.formClass}
        />
        <InputShowAndAboutMe
          role={this.props.role}
          name={this.props.name}
          about={this.props.about}
          inputValue={this.state.inputValue}
          valueName={this.state.valueName}
          _showForm={this.state._showForm}
        />
        <SocialLinks newclass="right-align mt3" />
      </AboutCSS>
    );
  }
}
