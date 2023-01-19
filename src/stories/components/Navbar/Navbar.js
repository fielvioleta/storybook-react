import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';

const Navbar = (props) => (
  <div className={styles.Navbar} data-testid="Navbar">
    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#navbar">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#navbar">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#navbar">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#navbar">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#navbar" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

Navbar.propTypes = {
  dark: PropTypes.bool
};

Navbar.defaultProps = {
  dark: false
};

export default Navbar;
