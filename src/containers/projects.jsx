import React, { Component } from 'react';
import Project from './project';
import projects from '../projects_data.js';

import pic1 from '../pic1.png';
import pic2 from '../pic2.PNG';
import pic3 from '../pic3.PNG';

class Projects extends Component {

	render() {
		let count = 1;
		return(
		
				<div className="projects-container">
					<div className="projects-card-container row" id="load" >
						<Project project={projects[0]} pic={pic1} />
						<Project project={projects[1]} pic={pic2} />
						<Project project={projects[2]} pic={pic3} /> 
					</div>
				</div>				
		);
	}
}

export default Projects;