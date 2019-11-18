import React, { Component } from 'react';
import Project from './project';
import projects from '../projects_data.js';

import pic1 from '../pic1.png';
import pic2 from '../pic2.PNG';
import pic3 from '../pic3.PNG';

class Projects extends Component {

	render() {
		let count = 1;
		const arr1 = ["small-rails", "small-javascript"];
		const arr2 = ["small-rails", "small-javascript"];
		const arr3 = ["small-redux", "small-javascript", "small-react"];

		return(
			
				<div className="projects-container">
					<div className="projects-card-container row" id="load" >
						<Project project={projects[0]} pic={pic1} logo={arr1} image="../pic1.png" />
						<Project project={projects[1]} pic={pic2} logo={arr2}/>
						<Project project={projects[2]} pic={pic3} logo={arr3}/> 
					</div>
				</div>				
		);
	}
}

export default Projects;