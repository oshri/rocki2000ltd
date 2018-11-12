import { Input } from 'reactstrap';

const RadioField = ({ value, input, ...custom }) => (
    <Input type="radio" checked={value === input.value} {...input} {...custom} />
);

export default RadioField;