import React from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Label, FormGroup } from 'reactstrap';
import TextField from '../TextField';
import { required, asyncValidate} from '../../../../utils/formValidation';
  
  const renderInputs = ({ fields, meta: { touched, error, submitFailed }, onSubmitTag, onUpdtaeTag, onDeleteTag}) => {
	
	return (
		<div>
			<button className="rounded-icon-button" type="button" onClick={() => fields.push({})}>
				<FontAwesomeIcon icon="plus" />
			</button>
			{(touched || submitFailed) && error && <span>{error}</span>}
	
			{fields.map((tag, index) => (
				<Row className="row-start-wrapper" key={index}>
					<Col md={2}>
						<button type="button" className="rounded-icon-button" onClick={() => fields.remove(index)}>
							<FontAwesomeIcon icon="trash-alt" />
						</button>
						<button type="button" className="rounded-icon-button" onClick={() => onUpdtaeTag(fields.get(index).name)}>
							<FontAwesomeIcon icon="save" />
						</button>
					</Col>
					<Col md={10}>
						<FormGroup>
							<Field 	name={`${tag}.name`}
									type="text"
									component={TextField}
									label="#tag" 
									placeholder="#tag"/>
						</FormGroup>
					</Col>
				</Row>
			))}
		</div>
	  )
  };
  
  const FieldArraysForm = props => {
		const { handleSubmit, pristine, reset, submitting, onSubmitTag, initialValues } = props;
		return (
			<div>
				<FieldArray name="tags"  component={renderInputs} onSubmitTag={onSubmitTag} />
			</div>
		);
  };
  
  export default reduxForm({
	form: 'fieldArrays',
	// asyncValidate,
	// asyncBlurFields: ['tags[].name']
  })(FieldArraysForm);
  