import React, {Fragment} from 'react';
import { FormFeedback, Input, FormText } from 'reactstrap';

const TextField = ({ input, meta: { touched, error, warning }, ...custom }) => (
    <Fragment>
        <Input {...(touched ? { valid: !error } : {})} {...input} {...custom} />
        {error && <FormFeedback>{error}</FormFeedback>}
        {!error && warning && <FormText>{warning}</FormText>}
    </Fragment>
);

export default TextField;