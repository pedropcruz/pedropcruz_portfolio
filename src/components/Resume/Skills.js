import React, { Component } from "react";
import SkillsCSS from "./Skills.css";
import EducationDATA from "../../resources/Education.json";
import ProfficiencyDATA from "../../resources/Profficiency.json";
import SkillsAndInterestsDATA from "../../resources/Skills&Interests.json";

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.insertEducationData = this.insertEducationData.bind(this);
    this.insertProfficiencyData = this.insertProfficiencyData.bind(this);
    this.insertSkillsAndInterestsData = this.insertSkillsAndInterestsData.bind(this);
  }

  insertEducationData(data) {
    return data.map((e, idx) => (
      <div key={"place__" + idx}>
        <h2 className="h2"> {e.name} </h2>
        <h4 className="h4">
          {e.from} - {e.to}
        </h4>
        {this.ArrayCourses(e.courses)}
      </div>
    ));
  }

  ArrayCourses(data, idx) {
    return data.map((e, idx) => <p key={"course__" + idx}>{e}</p>);
  }

  insertProfficiencyData(data) {
    return data.map((e, idx) => (
      <div key={"profficiency__" + idx}>
        <h2 className="h2">{e.status}</h2>
        <p>{e.level}</p>
      </div>
    ));
  }

  insertSkillsAndInterestsData(objData, elementIsTechnical){
    if(elementIsTechnical){
      return objData["Technical Skills"].map((e, idx) => (
        <p key={"Techincal__" + idx}>{e}</p>
      ));
    }else{
      return objData["Interests"].map((e, idx) => (
        <p key={"Interests__" + idx}>{e}</p>
      ));
    }
  }

  render() {
    return (
      <SkillsCSS className="col col-12 sm-col-4 skills relative">
        <div className="skills__education">
          <h1 className="h1 mb2">Education</h1>
          {this.insertEducationData(EducationDATA)}
        </div>
        <div className="skills__profficiency">
          <h1 className="h1 mb2 ">Profficiency</h1>
          <h4 className="h4 inline-block">1 - 10 Evaluation</h4>
          {this.insertProfficiencyData(ProfficiencyDATA)}
        </div>
        <div className="skills__technical">
          <h1 className="h1 mb2">Technical Skills</h1>
          {this.insertSkillsAndInterestsData(SkillsAndInterestsDATA, true)}
        </div>
        <div className="skills__interests">
          <h1 className="h1 mb2">Interests</h1>
          {this.insertSkillsAndInterestsData(SkillsAndInterestsDATA, false)}
        </div>
      </SkillsCSS>
    );
  }
}