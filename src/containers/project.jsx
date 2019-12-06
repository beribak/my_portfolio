import React, { Component } from 'react';
import pet_now_gif from '../pet_now_gif.gif';
import buddy_up_gif from '../buddyup_gif.gif';

class Project extends Component {

	render() {
		let src = "";

		if(this.props.gif === "pet_now_gif") {
			src = pet_now_gif;
		} else if(this.props.gif === "gif_library_gif") {
			
		} else if(this.props.gif === "buddy_up_gif") {
			src = buddy_up_gif;
		}	
		
		return(
				// <iframe src="https://giphy.com/embed/YOejYetOAKjzLjvNOx" width="240" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
			<div className="gif-container">
				<img className="gif" src={src} alt="Placeholder"/>
				<div className="project-info">
					<h2>PetNow</h2>
					<h5>AirBnb clone for renting comfort pets</h5>
					<h5>Build with Ruby on Rails, Javascript and Postgresql</h5>
					<h5>MVC architectural patern</h5>
					<h5>CRUD</h5>
					<div className="links-container">					
						<a href={this.props.link} target="#" className="link">See Online</a>
						<a href={this.props.src} target="#" className="link">Source</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;