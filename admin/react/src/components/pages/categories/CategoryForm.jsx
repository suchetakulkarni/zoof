import { Form, Input, Button, Modal } from 'antd';
import React, { Component } from 'react';
import {Formik, Field} from "formik";
import * as Yup from "yup";
import config from "../../../config";
import CropDialog from "./CropDialog";
import UploadButton from "./UploadButton";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


class CategoryFormInner extends Component {

	render() {
		return (
			<div className='form-content'>
				<div>{this.props.category.title}</div>
				<Form.Item label="Title">
					<Field as={Input} name='title' disabled={!editable} />
				</Form.Item>
				<Form.Item label="Description">
					<Field as={Input.TextArea} name='description' rows={5} disabled={!editable} />
				</Form.Item>
			</div>
		);
	}
}

class CategoryForm extends Component {
	state = {
		cropDialogVisible: false,
		cropSrc: null,
		crop: {
			unit: '%',
			width: 330,
			aspect: 330 / 270,

		},
	};

	constructor(props) {
		super(props);
	}

	showSelectImageDialog = () => {
		this.setState({cropDialogVisible: true})
	};

	imageSelect = (imageBlob, imageUrl) => {
		this.setState({imageBlob, imageUrl, cropDialogVisible: false})
	};

	imageSelectCancel = () => {
		this.setState({cropDialogVisible: false})
	};

	render() {
		const category = this.props.category;

		if (category) {
			console.log(category);
		}

		const editable = this.props.editable;

		let imageUrl = config.apiBaseUrl + 'files/' + category.image.id + '/' + category.image.filename;

		return (
							<Formik initialValues={category} enableReinitialize={true} keepDirtyOnReinitalize={false}>
							<div className='form-content'>
								<Form.Item label="Title">
									<Field as={Input} name='title' disabled={!editable} />
								</Form.Item>
								<Form.Item label="Description">
									<Field as={Input.TextArea} name='description' rows={5} disabled={!editable} />
								</Form.Item>
								<Form.Item label="Create">
									
									<Button type="primary" onClick={this.showSelectImageDialog}>Select image...</Button>
								</Form.Item>
								{
									this.state.cropDialogVisible &&
									<CropDialog
										onSelect={this.imageSelect}
										onCancel={this.imageSelectCancel}
									/>
								}
							</div>
							</Formik>
		);
	}
}

export default CategoryForm;
