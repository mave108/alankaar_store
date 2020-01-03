import React from 'react';

const Input = (props) => {
    const { type = 'text', ...rest } = props;
    return (
        <input type={type}  {...rest} />
    );
}
export default Input;