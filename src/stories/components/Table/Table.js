import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = (props) => {
  
  const rendersize = () => {
    switch (props.size) {
      case 'small':
        return 'table-sm';
      case 'medium':
        return 'table-md';
      case 'large':
        return 'table-lg';
      case 'extra-large':
        return 'table-xl';
      default:
        return '';
    }
  }

  const renderAttributeEl = () => {
    const tableProps = {
      className: `table-borderless table table-${props.type} 
      ${props.isStriped ? 'table-striped' : ''} 
      ${props.hoverable ? 'table-hover' : ''} 
      ${props.hasBorder ? 'table-bordered' : ''} 
      ${props.isBorderLess ? 'table-borderless' : ''} 
      ${rendersize()}
      `,
    };

    return tableProps
  }

  return (
    <div className="Table table-responsive" data-testid="Table">
      <table {...renderAttributeEl()}>
        {props.children}
      </table>
    </div>
  )
};

Table.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary','success','danger','warning','info','light','dark']),
  isStriped: PropTypes.bool,
  hoverable: PropTypes.bool,
  hasBorder: PropTypes.bool,
  isBorderLess: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium','large','extra-large']),
};

Table.defaultProps = {
  type: 'primary',
  isStriped: true,
  hoverable: true,
  hasBorder: true,
  isBorderLess: false,
  size: 'extra-large',
};

export default Table;
