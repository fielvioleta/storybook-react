import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

const TextField = (props) => (
  <>
    { props.label !== '' ?
    <label className="form-label">{props.label}</label> : null
    }

    <input className={`form-control form-control-${props.size}`} 
      type={props.type}
      placeholder={`${props.placeholder}`} 
      aria-label={`form-control-${props.size}`}
    />

  </>
);

TextField.propTypes = {
  type: PropTypes.oneOf(['text','password']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['lg','sm','md']),
};

TextField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  size: 'md',
};

export default TextField;
