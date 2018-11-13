import React, {Fragment} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import EditorField from '../FormsComponents/EditorField';
import TextField from '../FormsComponents/TextField';

let PageTabsEditor = (props) => {
  const { handleSubmit, pristine, reset, submitting, onSubmitForm } = props

  const onSubmit = (values, dispatch, props) => {

    debugger
    const dirty_fields_only = values.filter((value, key) => !(value === props.initialValues.get(key)))
  
    if (props.dirty) return onSubmitForm(dirty_fields_only)
  }
  

  return (
    <form onSubmit={handleSubmit((values, dispatch, props) => onSubmit(values, dispatch, props) )}>
      <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Field id="name" name="name" component={TextField} type="text" placeholder="name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Description</Label>
              <Field id="description" name="description" component={TextField} type="textarea" placeholder="Description" />
            </FormGroup>
          </Col>
      </Row>
      {/* <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="description">Description</Label>
            <Field id="description" name="description" component={EditorField} />
          </FormGroup>
        </Col>
      </Row> */}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  );
};

PageTabsEditor = reduxForm({
  // a unique name for the form
  form: 'pageEditor'
})(PageTabsEditor)

export default PageTabsEditor;