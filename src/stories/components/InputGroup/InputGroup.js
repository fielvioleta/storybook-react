import React from 'react';
import PropTypes from 'prop-types';
import './InputGroup.scss';
import TextField from '../TextField/TextField';

const InputGroup = (props) => (
  <>
    { props.label ? 
      <label>{props.label}</label>
    : null}

    <div className={`input-group input-group-${props.size} mb-3`}>
      { props.position === 'start' ? props.children : null}
      
      <TextField placeholder={props.placeholder}></TextField>
      
      { props.position === 'end' ? props.children : null}
    </div>
  </>
);

InputGroup.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['lg','default','sm']),
  position: PropTypes.oneOf(['start','end']),
  children: PropTypes.any,
};

InputGroup.defaultProps = {
  label: 'Input Group',
  placeholder: 'Input group example',
  size: 'default',
  position: 'start',
  children: <span className="input-group-text">Add on</span>
};

export default InputGroup;
