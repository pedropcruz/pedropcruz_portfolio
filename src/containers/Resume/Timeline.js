import React, { Component } from "react";
import TimelineCSS from "./Timeline.css";
import Logo from "../../logo.svg";

export default class Timeline extends Component {
  render() {
    const description =
      "Join to your team of work, in order to develop my technical and \n" +
      "Professional skills, to grow close to you in order to achieve a \n" +
      "goal together, to offer a service with efficiency and quality.";

    return (
      <TimelineCSS className="col col-8 clearfix timeline">
        <div className="col col-3 timeline__image">
          <figure className="fit block">
            <picture>
              <img src={Logo} alt="" />
            </picture>
          </figure>
        </div>
        <div className="col col-9 timeline__desc">
          <h2 className="h2 m0">Pedro Miguel Pereira da</h2>
          <h1 className="h1 m0">Cruz</h1>
          <p className="my3">{description}</p>
          <a className="btn p2 inline-block" href="/">
            Download CV as PDF
          </a>
        </div>
      </TimelineCSS>
    );
  }
}
