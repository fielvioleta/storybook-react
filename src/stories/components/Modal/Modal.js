import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = () => (
  <div className={styles.Modal} data-testid="Modal">
    
    <div className="mb-3">test</div>
    
  </div>
);

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
