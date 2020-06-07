import { Table, Button } from 'antd';
import React, { Component } from 'react';
import {connect} from "react-redux";
import {getCategoriesList} from "../../../actions";
import {Link} from "react-router-dom";

class ListCategories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			caetgories: null
		};
	}

	componentDidMount() {
		this.props.getCategoriesList();
	}

	render() {
		console.log('Render list categories!');
		console.log(this.props.categories);

		let columns = [
			{
				title: "Title",
				dataIndex: "title"
			},
			{
				title: "Description",
				dataIndex: "description"
			},
			{
				title: "Price",
				dataIndex: "price"
			},
			{
				title: "Action",
				render: (text, record) => (
					<div>
						<Link to={`/admin/categories/${record._id}`}><Button>Edit</Button></Link>&nbsp;&nbsp;
						<Button>Delete</Button>
					</div>
				)
			}
		];

		return (
			<div className="content">

				{this.props.categories && (
					<Table
						pagination={false}
						columns={columns}
						dataSource={this.props.categories}
					/>
				)}
			</div>
		);
	}
}

const mapDispatchToProps = {
	getCategoriesList,
};

function mapStateToProps(state) {
	return {
		categories: state.categories,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories);
