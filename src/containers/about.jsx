import React, { Component } from 'react';
import Loader from './loader';

class About extends Component {

	render() {

		return(	
			<div className="about-container">
				<div className="about-paragraph">
					<h3>sadasdsadsad asdfasdsa asdasdasdas asddasdasdasd sdfdfdsf</h3>
				</div>
				<div className="loaders-container-list">
					<Loader icon="js-square"/>
					<Loader icon="css3-alt"/>
					<Loader icon="html5"/>
					<Loader icon="react"/>
				</div>
			</div>				
		);
	}
}

export default About;