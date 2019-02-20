import React from 'react';

import styles from './BuildControl.module.css';

const buildContorl = props => (

    <div className={styles['build-control']}>
      <h3>{props.label}</h3>
      <button onClick={props.decreace} disabled={props.disabled}>-</button>
      <p>{props.amount}</p>
      <button onClick={props.increace}>+</button>
    </div>

);

export default buildContorl;