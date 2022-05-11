import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    children,
    className = '',
    primary = false,
    secondary = false,
    onClick,
    type = 'button',
    ...props
}) => {
    const bgClassName = primary
        ? 'bg-indianred'
        : secondary
        ? 'bg-mediumslateblue'
        : 'bg-transparent';
    return (
        <button
            type={type}
            className={`py-3 w-full rounded-lg capitalize text-white text-lg font-medium mt-auto ${bgClassName} ${className}`}
            onClick={onClick}
            {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

export default Button;
