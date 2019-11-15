import React, { Component } from 'react';

class Header extends Component {

	render() {
		return(
			<div className="header">
				<h1>Danko Beribak</h1>
				<a href="#load" className="btn btn-danger my-work-btn">My work</a>
			</div>
		);
	}
}

export default Header;