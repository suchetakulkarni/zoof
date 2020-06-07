import React from 'react';
import config from '../config'
import {connect} from "react-redux";
import customerActions from '../actions/customer';

class Category extends React.Component {

	
	render() {
		
		return (
			<div className="category">
					<div className="bottom">
						<h1>{this.props.title}</h1>
						<h2>{this.props.description}</h2>
					</div>
			</div>
		);
	}
}


export default connect(null)(Categpry);
