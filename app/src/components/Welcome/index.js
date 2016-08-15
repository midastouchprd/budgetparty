import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';
import homeBackground from 'images/icons/homeBackground.png';

class Welcome extends Component {
  render() {
    return (
      <div className={`${styles.bgWrapper} container`}>
        <img src={homeBackground} alt="government building icon" className={styles.bgImg}/>
        <div className={styles.container}>
          <h1 className={styles.header}>Build a Budget</h1>
          <p className={`${styles.text} lead`}>Understand & create a city budget for Austin</p>
          <Link className={`${styles.buttonWhiteOutline} btn btn-lg btn-success`} role="button" to="/fund">Start building</Link>
          <Link className={styles.link} to="/about"><p>More about this project</p></Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
