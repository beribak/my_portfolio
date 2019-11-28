import React, { Component } from 'react';
import Loader from './loader';

class About extends Component {

	render() {

		return(	
			
			<div className="about-container" id="about">
				<div className="about-paragraph">
					<h3>I am a web developer, with one year
						of experience and strong knowledge
						of modern frameworks and libraries. I
						am capable of building, deploying and
						maintaining web applications, and
						static/dynamic websites.
					</h3>
					<img src="../pets.jpg" className="pets" ></img>
				</div>
				
			</div>				
			
		);
	}
}

export default About;