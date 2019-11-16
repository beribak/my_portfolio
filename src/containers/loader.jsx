import React, { Component } from 'react';

class Loader extends Component {

	render() {
		
		// let str = "fab fa-"
		return(
			<div className="loaders">
				<i className={"icon fab fa-" + this.props.icon}></i>
				<div className="myContainer">
					<div className="bar"></div>
				</div>
			</div>
		);
	}
}

export default Loader;