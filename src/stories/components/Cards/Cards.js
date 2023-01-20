import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cards.module.scss';

const Cards = (props) => (
  <div className={styles.Cards} data-testid="Cards">
    <div className={`card ${props.center ? 'text-center': ''}`} style={{width: props.width + 'px'}}>
      { props.hasHeading? 
        <div class="card-header"> { props.headingText } </div> : null
      }

      { props.image !== '' ?
        <img src={ props.image } class="card-img-top" alt="..."/> : null
      }

      <div className="card-body">
        <h5 className="card-title">{ props.cardTitle }</h5>
        <p className="card-text">{ props.cardBodyText }</p>
        <a href="#link" className="btn btn-primary">Go somewhere</a>
      </div>

      { props.hasFooter?
        <div class="card-footer text-muted"> { props.footerText } </div> : null
      }
    </div>
  </div>
);

Cards.propTypes = {
  width: PropTypes.number,
  center: PropTypes.bool,
  image: PropTypes.string,
  hasHeading: PropTypes.bool,
  headingText: PropTypes.string,
  hasFooter: PropTypes.bool,
  footerText: PropTypes.string,
  cardTitle: PropTypes.string,
  cardBodyText: PropTypes.string
};

Cards.defaultProps = {
  width: 400,
  center: false,
  image: '',
  hasHeading: true,
  hasFooter: true,
  headingText: '',
  footerText: '',
  cardTitle: '',
  cardBodyText: ''
};

export default Cards;
