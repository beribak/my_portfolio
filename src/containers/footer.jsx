import React, { Component } from 'react';

class Footer extends Component {

	render() {

		return(	
			<div className="footer" id="footer">
				<h5><i class="fas fa-phone"></i> +1 818 213 3782</h5>
				<a href="mailto:beribakdanko@gmail.com" className="email"><i class="far fa-envelope"></i>  beribakdanko@gmail.com</a>
				<div className="icons">
				</div>
			</div>				
		);
	}
}

export default Footer;