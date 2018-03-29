import React, { Component } from "react";
import Header from "./Header";
import About from "./Home/About";
import ProjectsSection from "./Home/ProjectsSection";
import Footer from "./Footer";
import BackgroundAnimated from "../components/BackgroundAnimated/BackgroundAnimated";
import roles from '../resources/roles';
import {Player} from "./Home/Player";

class App extends Component {
  render() {
    const aboutText = {
      text:
        "I like to be involved not only in the UX/UI but also in the JS layers below. \n" +
        "I'm a curious mind by nature. My nights are spent dreaming of the next big thing."
    };

    return (
      <section className="relative overflow-hidden z1">
        <div className="relative z4">
          <Header />
          <About name="Pedro Cruz" role={roles} about={aboutText.text} />
          <ProjectsSection />
          <Player/>
          <Footer />
        </div>
        <BackgroundAnimated />
      </section>
    );
  }
}

export default App;
