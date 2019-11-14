import React, { Component } from 'react';
import Loader from './loader';

class Loaders extends Component {

	render() {

		return(	
			<div className="loaders-container">
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

export default Loaders;