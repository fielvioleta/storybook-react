import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

const TextField = (props) => (
  <div className={styles.TextField} data-testid="TextField">

    { props.label !== '' ?
    <label className="form-label">{props.label}</label> : null
    }

    <input className={`form-control form-control-${props.size}`} 
      type="text" 
      placeholder={`${props.placeholder}`} 
      aria-label={`.form-control-${props.size}`}
    />

  </div>
);

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['lg','sm','md']),
};

TextField.defaultProps = {
  label: '',
  placeholder: '',
  size: '',
};

export default TextField;
