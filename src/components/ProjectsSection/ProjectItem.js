import React, {Component} from 'react';
import ProjectItemCSS from './ProjectItem.css';

export default class ProjectItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props._id,
            number: this.props.projectNumber,
            name: this.props.projectName,
            url: this.props.projectUrl,
            images: this.props.projectImages,
            texts: this.props.text
        };

        this.pad = this.pad.bind(this);
    }


    pad = (num, width, z) => {
        z = z || '0';
        num = num + '';
        return (
            num.length >= width ? num : new Array(width - num.length + 1).join(z) + num
        );
    };

    render() {
        return (
            <ProjectItemCSS className="relative p4 m4">
                <span className="project-item ">
                    <h1 className="project-item--number inline-block px2">{this.pad(this.state.number, 2)}</h1>
                    <figure className="project-item--image absolute top-0">
                        <picture>
                            <img src={this.state.images.big} alt={this.state.name + ' image'}/>
                        </picture>
                    </figure>
                    <div className="project-item--details absolute block col-12">
                        <h1 className="project-item--details__name">{this.state.name}</h1>
                        <p className="project-item--details__lead col-7">{this.state.texts.lead}</p>
                        <a href={this.state.url} className="project-item--details__linkProject block mt3"> </a>
                    </div>
                </span>
            </ProjectItemCSS>
        );
    }
}