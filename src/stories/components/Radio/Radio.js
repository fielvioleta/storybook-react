import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

const Radio = (props) => (
  <div className={styles.Radio} data-testid="Radio">
    <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
      <label className="form-check-label" for="flexRadioDefault1">
        { props.label }
      </label>
    </div>
  </div>
);

Radio.propTypes = {
  label: PropTypes.string
};

Radio.defaultProps = {
  label: ''
};

export default Radio;
