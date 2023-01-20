import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.scss';

const List = (props) => (
  <div className={styles.List} data-testid="List">
    <ul className="list-group">
      <li className="list-group-item active" aria-current="true">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  </div>
);

List.propTypes = {
  items: PropTypes.number,
};

List.defaultProps = {
  items: 5
};

export default List;
