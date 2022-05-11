import React from 'react';
import PropTypes from 'prop-types';

const Skeleton = ({ width = '100%', height, borderRadius }) => {
    return (
        <div className='skeleton' style={{ width, height, borderRadius }}></div>
    );
};

Skeleton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    radius: PropTypes.string,
};

export default Skeleton;
