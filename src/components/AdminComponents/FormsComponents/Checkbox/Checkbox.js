import { Input } from 'reactstrap';

const Checkbox = ({ input: { value, onChange } }) => (
    <Input type="checkbox" checked={!!value} onChange={onChange} />
);

export default Checkbox;