import React, { Component } from 'react';
import Project from './project';
import projects from '../projects_data.js';

class Projects extends Component {

	render() {

		const link_pet_now = "https://petnow.herokuapp.com";
		const src_pet_now =" https://github.com/khoa165/petNow"; 
		return(
			
				<div className="projects-container">
					<div className="projects-card-container" id="load" >
						<Project gif="pet_now_gif" src={src_pet_now} link={link_pet_now}/>
						<Project />
						<Project /> 
					</div>
				</div>				
		);
	}
}

export default Projects;