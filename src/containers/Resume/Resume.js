import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Skills from "./Skills";
import Timeline from "./Timeline";
import BackgroundAnimated from '../BackgroundAnimated';

export default class Resume extends Component {
  render() {
    return (
      <section className="relative overflow-hidden z1">
        <div className="relative z4">
          <Header />
          <section className="relative max-width-4 clearfix mx-auto">
            <Timeline/>
            <Skills/>
          </section>
          <Footer />
        </div>
        <BackgroundAnimated />
      </section>
    );
  }
}
