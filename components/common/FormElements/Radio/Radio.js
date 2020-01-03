import React from 'react';
import './style.scss';
import Input from '../Input';

const Radio = (props) => {
    const { type = 'text', label, ...rest } = props;
    return (
        <label class="radio-container">
            <span className="radio-label">{label}</span>
            <Input type="radio"  {...rest} />
            <span className="checkmark"></span>
        </label>

    );
}
export default Radio;