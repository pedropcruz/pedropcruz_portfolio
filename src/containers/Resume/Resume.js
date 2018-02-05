import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Skills from "../../components/Resume/Skills";
import Timeline from "../../components/Resume/Timeline";
import BackgroundAnimated from '../BackgroundAnimated';

export default class Resume extends Component {
  render() {
    return (
      <section className="relative overflow-hidden z1">
        <div className="relative z4">
          <Header />
          <section className="relative clearfix mx4">
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
