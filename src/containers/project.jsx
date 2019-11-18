import React, { Component } from 'react';

class Project extends Component {

	render() {
		const logo = this.props.logo;
		const image = this.props.image;
		return(
			<div className="project-card col-sm-4" style={{backgroundImage: url(`${image}`)}}>
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
				<div className="p-3 mt-2">
					<div>
						<a href={this.props.project.sourceLink} target="#" className="source-link" >Source Code</a>
					</div>
					<div>
						<a href={this.props.project.projectLink} target="#" className="project-link" >Link</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;