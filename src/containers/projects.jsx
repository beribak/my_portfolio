import React, { Component } from 'react';
import Project from './project';
import projects from '../projects_data.js';

// import pic1 from '../pic1.png';
// import pic2 from '../pic2.PNG';
// import pic3 from '../pic3.PNG';

class Projects extends Component {

	render() {
		let count = 1;
		const arr1 = ["small-rails", "small-javascript", "small-sql"];
		const arr2 = ["small-rails", "small-javascript", "small-sql"];
		const arr3 = ["small-javascript"];

		return(
			
				<div className="projects-container">
					<div className="projects-card-container" id="load" >
						<Project project={projects[0]} logo={arr1} image=" pic1" />
						<Project project={projects[1]} logo={arr2} image=" pic2" />
						<Project project={projects[2]} logo={arr3} image=" pic3" /> 
					</div>
				</div>				
		);
	}
}

export default Projects;