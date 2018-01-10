import React, {Component} from 'react';

export default class ProjectItem extends Component{

    constructor(props){
        super(props);

        this.state = {
            id: this.props._id,
            number : this.props.projectNumber,
            name: this.props.projectName,
            url: this.props.projectUrl,
            images: this.props.projectImages,
            texts: this.props.text
        }
    }

    render(){
        return(
            <article className="relative project-item">
                <h1 className="project-item--number">{this.state.number}</h1>
                <figure className="project-item--image">
                    <picture>
                        <img src={this.state.images.big} alt={this.state.name + ' image'}/>
                    </picture>
                </figure>
                <p className="project-item--lead">{this.state.texts.lead}</p>
                <a href={this.state.url} className="project-item--linkProject"> </a>
            </article>
        );
    }
}