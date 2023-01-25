import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';
import "./Tooltip.css"

const Tooltip = (props) =>{
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div className={styles.Tooltip} data-testid="Tooltip">
      <div
        className={`Tooltip-Wrapper`}
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
      >

        {props.children}

        {active && (
          <div className={`Tooltip-Tip ${props.direction || "top"}`}>
            {props.content}
          </div>
        )}
        
      </div>
    </div>
  );

}

Tooltip.propTypes = {
  direction: PropTypes.oneOf(['right','left','top','bottom']),
  content: PropTypes.any,
  children: PropTypes.any
};

Tooltip.defaultProps = {
  direction: 'right',
  content: '',
  children: ''
};

export default Tooltip;
