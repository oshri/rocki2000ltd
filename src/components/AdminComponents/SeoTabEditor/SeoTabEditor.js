import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
	Col,
	Row,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from 'reactstrap';

import './SeoTabEditor.scss';
import EditorField from '../FormsComponents/EditorField';
import TextField from '../FormsComponents/TextField';
import SelectField from '../FormsComponents/SelectField';
import CheckboxField from '../FormsComponents/Checkbox';
import Image from '../../Image';

let SeoTabEditor = (props) => {
	const { handleSubmit, pristine, reset, submitting, onSubmitForm } = props;

	const onSubmit = (values, dispatch, props) => {
		const dirty_fields_only = values.filter(
			(value, key) => !(value === props.initialValues.get(key))
		);

		if (props.dirty) return onSubmitForm(values);
	};

	return (
		<form
			className="SeoTabEditor"
			onSubmit={handleSubmit((values, dispatch, props) =>
				onSubmitForm(values)
			)}
		>
			<Row>
				<Label>Page meta data</Label>
			</Row>
			<Row>
				<Col md={12}>
					<FormGroup>
						<Label for="Name">Title</Label>
						<Field
							id="locale"
							name="seo.title"
							component={TextField}
							type="text"
							placeholder="title"
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<FormGroup>
						<Label for="Name">Description</Label>
						<Field
							id="locale"
							name="seo.description"
							component={TextField}
							type="textarea"
							placeholder="description"
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Label>Open Graph</Label>
			</Row>
			<Row>
				<Col md={12}>
					<FormGroup>
						<Label for="site_name">Site Name</Label>
						<Field
							id="locale"
							name="seo.openGraph.site_name"
							component={TextField}
							type="text"
							placeholder="site name"
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<FormGroup>
						<Label for="url">url</Label>
						<Field
							id="locale"
							name="seo.openGraph.url"
							component={TextField}
							type="text"
							placeholder="url"
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<FormGroup>
						<Label for="openGraphTitle">openGraphTitle</Label>
						<Field
							id="locale"
							name="seo.openGraph.openGraphTitle"
							component={TextField}
							type="text"
							placeholder="openGraphTitle"
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<FormGroup>
						<Label for="openGraphdescription">openGraphdescription</Label>
						<Field
							id="locale"
							name="seo.openGraph.openGraphdescription"
							component={TextField}
							type="textarea"
							placeholder="openGraphdescription"
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<FormGroup>
						<Label for="image">image</Label>
						<Field
							id="locale"
							name="seo.openGraph.image"
							component={TextField}
							type="text"
							placeholder="image"
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={3}>
					<FormGroup>
						<Label for="type">type</Label>
						<Field
							id="locale"
							name="seo.openGraph.type"
							component={TextField}
							type="text"
							placeholder="type"
						/>
					</FormGroup>
				</Col>
				<Col md={3}>
					<FormGroup>
						<Label for="locale">locale</Label>
						<Field
							id="locale"
							name="seo.openGraph.locale"
							component={TextField}
							type="text"
							placeholder="locale"
						/>
					</FormGroup>
				</Col>
				<Col md={3}>
					<FormGroup>
						<Label for="imageWidth">imageWidth</Label>
						<Field
							id="locale"
							name="seo.openGraph.imageWidth"
							component={TextField}
							type="text"
							placeholder="imageWidth"
						/>
					</FormGroup>
				</Col>
				<Col md={3}>
					<FormGroup>
						<Label for="imageHeight">imageHeight</Label>
						<Field
							id="locale"
							name="seo.openGraph.imageHeight"
							component={TextField}
							type="text"
							placeholder="imageHeight"
						/>
					</FormGroup>
				</Col>
			</Row>
			<div className="form-actions">
				<div className="actions">
					<button
						className="form-button border-link-selected"
						type="submit"
						disabled={pristine || submitting}
					>
						Submit
					</button>
					<button
						className="form-button border-link-unselected"
						type="button"
						disabled={pristine || submitting}
						onClick={reset}
					>
						Undo Changes
					</button>
				</div>
			</div>
		</form>
	);
};

SeoTabEditor = reduxForm({
	form: 'pageInfoEditor'
})(SeoTabEditor);

export default SeoTabEditor;