import React from 'react'
import PropTypes from 'prop-types';

// Data yang dijadikan dinamis
// textButton
const Button = ({ textButton, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} >{ textButton }</button>
  );
}

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'submit',
}

export default Button;