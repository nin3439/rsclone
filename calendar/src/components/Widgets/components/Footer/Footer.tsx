import React from 'react';
import classes from './styles/Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <a href="https://rs.school/">
          <img
            src="https://rs.school/images/rs_school.svg"
            alt="RSS Logo"
            className={classes.rssImage}
          />
        </a>
        <span>2021</span>
      </div>
      <div>
        <a className={classes.link} href="https://github.com/kubana6">
          {' '}
          kubana-6
        </a>
        <a className={classes.link} href="https://github.com/andrei-roh">
          {' '}
          andrei-roh
        </a>
        <a className={classes.link} href="https://github.com/nin3439">
          {' '}
          nin3439
        </a>
      </div>
    </div>
  );
};
