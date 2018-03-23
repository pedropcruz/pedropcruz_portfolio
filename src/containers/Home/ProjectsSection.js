import React, {Component} from 'react';
import projectsJson from '../../resources/Projects.json';
import ProjectItem from "../../components/ProjectsSection/ProjectItem";


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
                         stack={item.tech.stack}
            />
        ));
    };

    render() {
        return (
            <section className="relative max-width-4 mx-auto my4">
                {this.mapItems()}
            </section>
        );
    }
}