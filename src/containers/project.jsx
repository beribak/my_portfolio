import React, { Component } from 'react';

class Project extends Component {

	render() {
		const logo = this.props.logo;
		const image = this.props.image;
		let cl = "";
		cl += image;
		
		return(
			<div className={cl}>
				<iframe src="https://giphy.com/embed/YOejYetOAKjzLjvNOx" width="240" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

			</div>
		);
	}
}

export default Project;