import React from 'react';
import PropTypes from 'prop-types';

import './avatar.css';

const Avatar = ({ src }) => {
  return (
    <img src={src} alt="Profile User" className="avatar"/>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
}


export default Avatar;