import React from 'react';
import './style.scss';
import Input from '../Input';

const Checkbox = (props) => {
    const { type = 'text', label, ...rest } = props;
    return (
        <label class="checkbox-container">
            <span className="checkbox-label">{label}</span>
            <Input type="checkbox"  {...rest} />
            <span className="checkmark"></span>
        </label>

    );
}
export default Checkbox;