import React, { Component } from 'react';
import pet_now_gif from '../pet_now_gif.gif';

class Project extends Component {

	render() {

		
		return(
				// <iframe src="https://giphy.com/embed/YOejYetOAKjzLjvNOx" width="240" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
			<div className="gif-container">
				<img className="gif" src={pet_now_gif} alt="Placeholder"/>
				<div className="project-info">
					<h2>PetNow</h2>
					<h5>AirBnb clone for renting comfort pets</h5>
					<h5>Build with Ruby on Rails, Javascript and Postgresql</h5>
					<h5>MVC architectural patern</h5>
					<h5>CRUD</h5>
					<div className="links-container">					
						<a href="#" className="link">See Online</a>
						<a href="#" className="link">Source</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;