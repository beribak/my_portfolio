import React, { Component } from 'react';

class Project extends Component {

	render() {
		const logo = this.props.logo
		return(
			<div className="project-card col-sm-4">
				<img src={this.props.pic} className="image" alt="danko" />
				<div className="card-text">
					<h2>{this.props.project.name}</h2>
					<h4>{this.props.project.text}</h4>
				</div>
				<div className="tech-stack">
					<div className={logo[0]}/>
					<div className={logo[1]}/>
					<div className={logo[2]}/>
					<div className={logo[3]}/>
				</div>
				<a href={this.props.project.sourceLink} target="#" className="source-link" >Source Code</a>
				<a href={this.props.project.projectLink} target="#" className="project-link" >Link</a>
			</div>
		);
	}
}

export default Project;