import React, { Component } from 'react';
import Loader from './loader';

class About extends Component {

	render() {

		return(	
			<div className="about-container row" id="about">
				<div className="about-paragraph col-sm-6">
					<h3>sadasdsadsad asdfasdsa asdasdasdas asddasdasdasd sdfdfdsf</h3>
				</div>
				<div className="loaders-container-list col-sm-6">
					<i className="icon fab fa-square" ></i>
					<i className="icon fab fa-css3-alt" ></i>
					<i className="icon fab fa-html5" ></i>
					<i className="icon fab fa-react" ></i>
					<i className="icon fab fa-sass" ></i>
				</div>
			</div>				
		);
	}
}

export default About;