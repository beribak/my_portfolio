import React, { Component } from 'react';

class Header extends Component {

	render() {
		return(
			<div className="header">
				<h1>Danko Beribak</h1>
				<div className="my-work-btn">
					<a href="#load">My work</a>
				</div>
			</div>
		);
	}
}

export default Header;