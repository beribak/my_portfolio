import React, { Component } from 'react';
import Project from './project';
import Loader from './loader';
import projects from '../../projects_data.js';

class Projects extends Component {

	render() {
		return(
		
				<div className="projects-container">
					<div className="projects-card-container " id="load" >
						{projects.map(project => <Project project={project} />)}
					</div>
				</div>				
		);
	}
}

export default Projects;