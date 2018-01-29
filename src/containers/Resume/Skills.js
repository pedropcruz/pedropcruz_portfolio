import React, { Component } from "react";
import SkillsCSS from "./Skills.css";
import EducationDATA from "../../resources/Education.json";
import ProfficiencyDATA from "../../resources/Profficiency.json";
import SkillsAndInterestsDATA from "../../resources/Skills&Interests.json";

let flag = true;

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.insertEducationData = this.insertEducationData.bind(this);
    this.ArrayCourses = this.ArrayCourses.bind(this);
  }

  insertEducationData(data) {
    data.forEach((e, idx) => {
      let dataCoursesArray = e.courses;
      return data.forEach((e, idx) => (
        <div key={"place__" + idx}>
          <h2 className="h2">{e.name}</h2>
          <h4 className="h4">
            {e.from} - {e.to}
          </h4>
          {Array.from((e.courses).map(function(result){console.log(result);}))}
        </div>
      ));
    });
  }

  ArrayCourses(data, idx) {
    return data.forEach(e => <p key={"course__" + idx}>{e}</p>);
  }

  render() {
    return (
      <SkillsCSS className="col col-4">
        <h1>Education</h1>
        {this.insertEducationData(EducationDATA)}
      </SkillsCSS>
    );
  }
}
