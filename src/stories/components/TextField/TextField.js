import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

const TextField = () => (
  <div className={styles.TextField} data-testid="TextField">
    TextField Component
  </div>
);

TextField.propTypes = {};

TextField.defaultProps = {};

export default TextField;
