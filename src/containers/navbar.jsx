import React, { Component } from 'react';

class Navbar extends Component {

	render() {

		return(	
			<div className="navbar">
				<div className="left">
					<a href="#load" >Projects</a>
					<a href="#about" >About</a>
					<a href="#footer" >Contact</a>
				</div>
				<div className="right">
					<a href="https://github.com/beribak" target="#" className="git-nav"><i class="fab fa-github"></i></a>
					<a href="https://meta.stackoverflow.com/users/12294707/oknad" target="#" className="git-nav"><i class="fab fa-stack-overflow"></i></a>
				</div>
			</div>				
		);
	}
}

export default Navbar;