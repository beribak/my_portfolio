import React, { Component } from 'react';

class TechContainer extends Component {

	render() {

		return(	
			
			<div className="tech-container" id="tech">
				<div className="tech-stack">
					<h4>Front End</h4>
					<h5>HTML5</h5>
					<h5>CSS3-SCSS</h5>
					<h5>Javascript</h5>
					<h5>React-Redux</h5>
				</div>
				<div className="tech-stack">
					<h4>Back End</h4>
					<h5>Ruby on Rails</h5>
					<h5>Node</h5>
				</div>
				<div className="tech-stack">
					<h4>Database</h4>
					<h5>Postgresql</h5>
					<h5>My SQL</h5>
				</div>
				<div className="tech-stack">
					<h4>Deployment</h4>
					<h5>Heroku</h5>
					<h5>AWS</h5>
				</div>
			</div>				
			
		);
	}
}

export default TechContainer;