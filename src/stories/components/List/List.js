import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.scss';

const List = (props) => (
  <div className={styles.List} data-testid="List">
    <ul className={`list-group list-group-${props.type}`}>
      { props.children }
    </ul>
  </div>
);

List.propTypes = {
  type: PropTypes.oneOf(['default','flush','numbered','horizontal']),
  children: PropTypes.any
};

List.defaultProps = {
  type: 'default'
};

export default List;
