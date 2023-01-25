import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.scss';

const CheckBox = (props) => {

  React.useEffect(() => { 
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].indeterminate = props.indeterminate;
    }
  });

  const returnAttributesEl = () => {
    const inputProps = {
      className: 'form-check-input ' + props.type,
      type: 'checkbox'
    };
    if( props.disabled) {
      inputProps.disabled = true
    }
    return inputProps;
  }

  return (
    <div className="CheckBox" data-testid="CheckBox">
      <div className="form-check">
        <input {...returnAttributesEl()}/>
        <label className={'form-check-label ' + props.type}>
          {props.label}
        </label>
      </div>
    </div>
  )
};

CheckBox.propTypes = {
  /**
   * Indeterminate checkbox
   */
  indeterminate: PropTypes.bool,
  /**
   * Label of the checkbox
   */
  label: PropTypes.string,
  /**
   * Label of the checkbox
   */
  type: PropTypes.oneOf(['primary','success','danger']),
  /**
   * Checkbox disabled
   */
  disabled: PropTypes.bool,
};

CheckBox.defaultProps = {};

export default CheckBox;
