import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  
  const renderType = () => {
    switch (props.type) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'link':
        return styles.link;
      case 'success':
        return styles.success;
      case 'danger':
        return styles.danger;
      case 'warning':
        return styles.warning;
      case 'info':
        return styles.info;
      case 'light':
        return styles.light;
      case 'dark':
        return styles.dark;
      case 'outline-primary':
        return styles.outlinePrimary;
      case 'outline-secondary':
        return styles.outlineSecondary;
      case 'outline-success':
        return styles.outlineSuccess;
      case 'outline-danger':
        return styles.outlineDanger;
      case 'outline-warning':
        return styles.outlineWarning;
      case 'outline-info':
        return styles.outlineInfo;
      case 'outline-light':
        return styles.outlineLight;
      case 'outline-dark':
        return styles.outlineDark;
      default:
        return '';
    }
  }

  const renderSize = () => {
    switch (props.size) {
      case 'small':
        return styles.small;
      case 'medium':
        return styles.medium;
      case 'large':
        return styles.large;
      default:
        return '';
    }
  }

  const returnAttributesEl = () => {
    const inputProps = {
      className: renderSize() + ' ' + renderType(),
    };

    if( props.disabled) {
      inputProps.disabled = true
    }
    return inputProps;
  }

  return (
    <div className={styles.Button} data-testid="Button">
      <button {...returnAttributesEl()}>
          {props.label}
        </button>
    </div>
  )
}

Button.propTypes = {
  /**
   * type of button
   */
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'link',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-danger',
    'outline-warning',
    'outline-info',
    'outline-light',
    'outline-dark',
  ]),
  /**
   * size of button
   */
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  /**
   * disable button
   */
  disabled: PropTypes.bool,
  /**
   * label of the button
   */
  label: PropTypes.string
};

Button.defaultProps = {
  type: 'primary',
  size: 'large',
  disabled: false,
  label: 'Hello World'
};

export default Button;
