import React, { Component } from "react";
import BackgroundAnimatedCSS from "../components/BackgroundAnimated/BackgroundAnimated.css";

const solidType = ["hexagon", "triangle", "cross", "square"];
const num = 80;

export default class BackgroundAnimated extends Component {
  constructor(props) {
    super(props);

    this.RandomNumber = this.RandomNumber.bind(this);
    this.LetSolidDance = this.LetSolidDance.bind(this);
    this.LoadSolidTypes = this.LoadSolidTypes.bind(this);
  }

  componentDidMount() {
    this.LoadSolidTypes();

    this.timer = setTimeout(() => {
      this.LetSolidDance();
    }, 1);
    this.timerInterval = setInterval(() => {
      this.LetSolidDance();
    }, 5000);
  }

  componentWillUnmount(){
      clearTimeout(this.timer);
      clearTimeout(this.timerInterval);
  }

  LoadSolidTypes() {
    for (let i = 0; i < num; i++) {
      let type = solidType[this.RandomNumber(0, solidType.length - 1)];

      let style = {
        top: this.RandomNumber(100, window.innerHeight - 100) + "px",
        left: this.RandomNumber(100, window.innerWidth - 100) + "px",
        transform: "rotate(" + this.RandomNumber(0, 360) + "deg"
      };

      let div = document.createElement("div");
      div.className += type + " outer";
      div.setAttribute("data-idx", i);
      document.querySelector(".backgroundAnimated").append(div);

      let $el = document.querySelector('div.outer[data-idx="' + i + '"]');
      Object.assign($el.style, style);
    }
  }

  LetSolidDance() {
    for (let i = 0; i < num; i++) {
      let div = document.querySelector('div.outer[data-idx="' + i + '"]');
      Object.assign(div.style, {
        transform:
          "translate(" +
          this.RandomNumber(-1000, 3000) +
          "px, " +
          this.RandomNumber(-1000, 3000) +
          "px) rotate(" +
          this.RandomNumber(0, 3000) +
          "deg)"
      });
    }
  }

  RandomNumber(from, to) {
    return Math.floor(Math.random() * to) + from;
  }

  render() {
    return (
      <BackgroundAnimatedCSS className="absolute top-0 bottom-0 right-0 left-0 backgroundAnimated" />
    );
  }
}
