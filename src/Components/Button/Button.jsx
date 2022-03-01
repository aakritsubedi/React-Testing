import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ label, action, disabled, className }) {
    return (
        <button
            title={label}
            onClick={action}
            className={disabled ? 'btn btn-disabled' : `btn ${className}`}
            disabled={disabled}
        >
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func,
    disabled: PropTypes.bool,
};
