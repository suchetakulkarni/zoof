import React from 'react';
import { connect } from 'react-redux'
import Category from './Category';

class Categories extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="categories">
					{
						this.props.categories.map( (item) => (
							<Category key={item._id} categoryId={item._id} image={item.image} title={item.title} description={item.description} price={item.price} />
						))
					}
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		categories: state.categories
	}
}

export default connect(mapStateToProps)(Categories)
