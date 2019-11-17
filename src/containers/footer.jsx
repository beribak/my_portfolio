import React, { Component } from 'react';

class Footer extends Component {

	render() {

		return(	
			<div className="footer" id="footer">
				<h5>+1 818 213 3782</h5>
				<h5>beribakdanko@gmail.com</h5>
				<div className="icons">
					<a href="#"><i class="fab fa-github"></i></a>
					<a href="#"><i class="fab fa-linkedin"></i></a>
				</div>
			</div>				
		);
	}
}

export default Footer;