import React, {Fragment} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './InfoTabsEditor.scss';
import EditorField from '../FormsComponents/EditorField';
import TextField from '../FormsComponents/TextField';
import SelectField from '../FormsComponents/SelectField';
import CheckboxField from '../FormsComponents/Checkbox';

let InfoTabsEditor = (props) => {
  const { handleSubmit, pristine, reset, submitting, onSubmitForm } = props

  const onSubmit = (values, dispatch, props) => {
    const dirty_fields_only = values.filter((value, key) => !(value === props.initialValues.get(key)))
  
    if (props.dirty) return onSubmitForm(values)
  }

  return (
    <form className="InfoTabsEditor" onSubmit={handleSubmit((values, dispatch, props) => onSubmitForm(values) )}>
      
      <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Name">Name</Label>
              <Field id="name" name="name" component={TextField} type="text" placeholder="name" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="ParentID">ParentID</Label>
              <Field id="name" name="parent" component={TextField} type="text" placeholder="parent" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="template">Template</Label>
              <Field id="template" name="template" component={SelectField} placeholder="Template">
                <option>page</option>
                <option>subject</option>
              </Field>
            </FormGroup>
          </Col>
      </Row>
      <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="link">Link</Label>
              <Field id="link" name="link" component={TextField} type="text" placeholder="link" />
            </FormGroup>
          </Col>
          <Col md={2}>
              <FormGroup>
                <Label for="order">Order</Label>
                <Field id="order" name="order" component={TextField} type="text" placeholder="order" />
              </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCheckbox">Home</Label>
              <div className="is-home">
                <FormGroup>
                  <Label for="show">Show</Label>
                  <Field id="isHome" name="isHome" component={CheckboxField} type="text" placeholder="isHome"/>
                </FormGroup>
                <FormGroup>
                  <Label for="promote">Promote</Label>
                  <Field id="isPromote" name="isPromote" component={CheckboxField} type="text" placeholder="isPromote"/>
                </FormGroup>
                </div>
            </FormGroup>
          </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup>
            <Label for="shortDescription">Short Description</Label>
            <Field id="shortDescription" name="shortDescription" component={TextField} type="textarea" placeholder="shortDescription" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup>
            <Label for="description">Description</Label>
            <Field id="description" name="description" component={TextField} type="textarea" placeholder="description" />
          </FormGroup>
        </Col>
      </Row>
      <div className="form-actions">
        <div className="actions">
          <button  className="form-button border-link-selected" type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button className="form-button border-link-unselected" type="button" disabled={pristine || submitting} onClick={reset}>
            Undo Changes
          </button>
        </div>
      </div>
    </form>
  );
};

InfoTabsEditor = reduxForm({
  // a unique name for the form
  form: 'pageInfoEditor'
})(InfoTabsEditor)

export default InfoTabsEditor;