import { Button } from 'antd';
import React, { Component } from 'react';
import {getCategory} from "../../../actions";
import {connect} from "react-redux";
import CategoryForm from './CategoryForm';
import * as Yup from "yup";
import config from "../../../config";

class Category extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		editable: false
	};

	componentDidMount() {
		this.props.getCategory(this.props.categoryId);
	}


	enableEdit = () => {
			this.setState({
					editable: true
			});
	};

	disableEdit = () => {
		this.setState({
			editable: false
		});
		this.props.getCategory(this.props.categoryId);
	};

	render() {
		const editable = this.state.editable;
		const onEditEnable = this.enableEdit;
		const onEditDisable = this.disableEdit;

		if (this.props.categoryLoading || !this.props.category) {
			return (
				<React.Fragment>
					<div className="form">
						<React.Fragment>
							<div className='form-head'>
								<div className='form-title'>
									Category Loading...
								</div>
								<div className='form-space_between'>&nbsp;</div>
							</div>
							<div className='form-content'>&nbsp;</div>
							<div className='form-bottom'>&nbsp;</div>
						</React.Fragment>
					</div>
				</React.Fragment>
			);
		}

		return (
			<React.Fragment>
					<div className="form">
						<React.Fragment>
							<div className='form-head'>
								<div className='form-title'>
									Category
								</div>
								<div className='form-space_between'>&nbsp;</div>
								{!editable &&
								<div className='form-toolbar'>
									<Button type="primary" onClick={onEditEnable}>Edit</Button>
								</div>
								}
							</div>
							<CategoryForm product={this.props.product} editable={editable} />
							{editable &&
							<div className='form-bottom'>
								<Button type="primary">Submit</Button>
								<Button onClick={onEditDisable} style={{ marginLeft: '10px' }}>Cancel</Button>
							</div>
							}
						</React.Fragment>
					</div>
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	getCategory,
};

function mapStateToProps(state) {
	return {
		categoryLoading: state.categoryLoading,
		category: state.category,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
