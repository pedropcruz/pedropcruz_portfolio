import React, { Component } from "react";
import Header from '../Header';
import About from '../About';
import ProjectsSection from '../ProjectsSection';
import Footer from '../Footer';
import OverlayMenuCSS from '../OverlayMenu.css';
import OverlayMenu from '../OverlayMenu';
import BackgroundAnimated from '../BackgroundAnimated';
import roles from './resources/roles';

export default class Home extends Component {
  render() {
    const aboutText = {
      text:
        "I like to be involved not only in the UX/UI but also in the JS layers below. \n" +
        "I'm a tinkerer, a jack of all trades, who spends the night dreaming on the \n" +
        "next big thing."
    };

    return (
      <section className="relative overflow-hidden z1">
        <div className="relative z4">
          <Header />
          <About name="Pedro Cruz" role={roles} about={aboutText.text} />
          <ProjectsSection />
          <Footer />
          <OverlayMenuCSS className="fixed top-0 right-0 left-0 bottom-0 display-none sm-hide md-hide lg-hide">
            <OverlayMenu moreclass="sm-hide md-hide lg-hide" button={true} />
          </OverlayMenuCSS>
        </div>
        <BackgroundAnimated />
      </section>
    );
  }
}
