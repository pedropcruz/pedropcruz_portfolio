import React, {Component} from 'react';
import ProjectSectionCSS from './ProjectsSection.css';
import projectsJson from '../resources/projects';
import ProjectItem from "../components/ProjectsSection/ProjectItem";


export default class ProjectsSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: projectsJson
        };

        this.mapItems = this.mapItems.bind(this);
    }

    mapItems = () => {
        const data = this.state.data;
        return data.map((item) => (
            <ProjectItem key={item._id}
                         projectNumber={item.number}
                         projectName={item.name}
                         projectUrl={item.url}
                         projectImages={item.images}
                         text={item.text}
            />
        ));
    };

    render() {
        return (
            <ProjectSectionCSS className="relative">
                {this.mapItems()}
            </ProjectSectionCSS>
        );
    }
}