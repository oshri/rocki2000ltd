import { Input } from 'reactstrap';

const SelectField = ({ input, meta: { touched, error }, children, ...custom }) => (
    <Input type="select" {...(touched ? { valid: !error } : {})} {...input} {...custom}>
        {children}
    </Input>
);

export default SelectField;