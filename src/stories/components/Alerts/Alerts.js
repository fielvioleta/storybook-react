import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alerts.module.scss';
import closeButton from '../../assets/close-button.png';

const Alerts = (props) => {
  
  const renderType = () => {
    switch (props.type) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
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
      default:
        return '';
    }
  }

  const renderTitleEl = () => {
    return props.title ? (<div className={styles.title}>
      {props.title} 
    </div>) : ''
  }

  const closeButtonEl = () => {
    return props.hasClose ? (<img alt='close-button' src={closeButton} className={styles.closeButton}/>) : ''
  }

  const renderMessageEl = () => {
    return (
      <div className={styles.message}>{props.message}</div>
    )
  }

  const renderSubMessageEl = () => {
    return (
      props.subMessage ? 
        <div className={styles.subMessage}>
          <hr className={styles.divider}/> 
          {props.subMessage}
        </div>
      : ''
    )
  }

  return (
    <div className={styles.Alerts + ' ' + renderType()} data-testid="Alerts">
      {closeButtonEl()}
      {renderTitleEl()}
      {renderMessageEl()}
      {renderSubMessageEl()}
    </div>
  )
};

Alerts.propTypes = {
  /**
   * Title of alert box
   */
  title: PropTypes.string,
  /**
   * Primary message
   */
  message: PropTypes.string,
  /**
   * Description or any other information needed to address to user
   */
  subMessage: PropTypes.string,
  /**
   * icon can be used to show on the left hand side of alert box
   */
  icon: PropTypes.string,
  /**
   * type of alert box you want to show
   */
  type: PropTypes.oneOf(['primary','secondary','success','danger','warning','info','light','dark']),
  /**
   * lets the user to close the alert box
   */
  hasClose: PropTypes.bool
};

Alerts.defaultProps = {
  title: '',
  message: '',
  subMessage: '',
  icon: '',
  type: '',
  hasClose: true
};

export default Alerts;
