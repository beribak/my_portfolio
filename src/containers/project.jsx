import React, { Component } from 'react';
import pic1 from '../pic1.png';
import pic2 from '../pic2.PNG';
import pic3 from '../pic3.PNG';

class Project extends Component {

	render() {
		return(
			<div className="project-card">
				<img src={this.props.project.imageUrl} className="image" alt="danko" />
				<div className="card-text">
					<h2>{this.props.project.name}</h2>
					<h4>{this.props.project.text}</h4>
				</div>
				<a href={this.props.project.sourceLink} target="#" className="btn btn-primary source-link" >Source Code</a>
				<a href={this.props.project.projectLink} target="#" className="btn btn-success project-link" >Link</a>
			</div>
		);
	}
}

export default Project;