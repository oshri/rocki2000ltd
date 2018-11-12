import React, {Fragment} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Row, Button, Form, FormFeedback, FormGroup, Label, Input, FormText } from 'reactstrap';

const renderTextField = ({ input, meta: { touched, error, warning }, ...custom }) => (
    <Fragment>
        <Input {...(touched ? { valid: !error } : {})} {...input} {...custom} />
        {error && <FormFeedback>{error}</FormFeedback>}
        {!error && warning && <FormText>{warning}</FormText>}
    </Fragment>
);

const renderRadioField = ({ value, input, ...custom }) => (
    <Input type="radio" checked={value === input.value} {...input} {...custom} />
);

const renderCheckbox = ({ input: { value, onChange } }) => (
    <Input type="checkbox" checked={!!value} onChange={onChange} />
);

const renderSelectField = ({ input, meta: { touched, error }, children, ...custom }) => (
    <Input type="select" {...(touched ? { valid: !error } : {})} {...input} {...custom}>
        {children}
    </Input>
);


const PageTabsEditor = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form>
      <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Field id="name" name="name" component={renderTextField} type="text" placeholder="name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Description</Label>
              <Field id="description" name="description" component={renderTextField} type="textarea" placeholder="Description" />
            </FormGroup>
          </Col>
      </Row>
      <div>
        <button type="submit" disabled={pristine || submitting} onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  );
};


export default reduxForm({
  form: 'pageEditor'
})(PageTabsEditor)