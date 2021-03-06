import React from 'react';

import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';


const modal = props => (
  <Aux>
    <Backdrop show={props.show} onDismiss={props.onDismiss} />
    <div
      className={styles['modal']}
      style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? 1 : 0
      }}>
      {props.children}
    </div>
  </Aux>
)

export default modal;