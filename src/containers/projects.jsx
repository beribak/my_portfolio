import React, { Component } from 'react';
import Project from './project';
import projects from '../projects_data.js';

class Projects extends Component {

	render() {

		const petNow = projects[1];
		const buddyUp = projects[0];
		const gifLibrary = projects[2]; 
		return(
			
				<div className="projects-container">
					<div className="projects-card-container" id="load" >
						<Project gif="pet_now_gif" text={petNow.text} 
						 name={petNow.name} src={petNow.sourceLink} link={petNow.projectLink} />
						<Project gif="buddy_up_gif" text={buddyUp.text} 
						 name={buddyUp.name} src={buddyUp.sourceLink} link={buddyUp.projectLink} />
						<Project gif="gif_library_gif" text={gifLibrary.text} 
						 name={gifLibrary.name} src={gifLibrary.sourceLink} link={gifLibrary.projectLink} /> 
					</div>
				</div>				
		);
	}
}

export default Projects;