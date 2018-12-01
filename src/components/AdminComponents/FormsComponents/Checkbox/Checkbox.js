import { Input } from 'reactstrap';

const CheckboxField = ({ input: { value, onChange } }) => (
    <Input type="checkbox" checked={!!value} onChange={onChange} />
);

export default CheckboxField;