import React from 'react';

import styles from './Spinner.module.css';

const spinner = () => (
  <div className={ styles['lds-ring'] }>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default spinner;
