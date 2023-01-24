import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

function Tooltip() {
  return (
    <div className={styles.Tooltip} data-testid="Tooltip">
      <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
        Tooltip on top
      </button>
      <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
        Tooltip on right
      </button>
      <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
        Tooltip on bottom
      </button>
      <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
        Tooltip on left
      </button>
    </div>
  );

}

Tooltip.propTypes = {};

Tooltip.defaultProps = {};

export default Tooltip;
