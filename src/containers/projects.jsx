import React, { Component } from 'react';
import Project from './project';
import projects from '../projects_data.js';

class Projects extends Component {

	render() {

		return(
			
				<div className="projects-container">
					<div className="projects-card-container" id="load" >
						<Project gif="pet_now_gif" />
						<Project />
						<Project /> 
					</div>
				</div>				
		);
	}
}

export default Projects;