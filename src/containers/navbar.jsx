import React, { Component } from 'react';

class Navbar extends Component {

	render() {

		return(	
			<div className="navbar">
				<div className="left">
					<a href="#" >About</a>
					<a href="#" >Work</a>
					<a href="#" >Contact</a>
				</div>
				<div className="right">
					<a href="#" >Resume</a>
				</div>
			</div>				
		);
	}
}

export default Navbar;