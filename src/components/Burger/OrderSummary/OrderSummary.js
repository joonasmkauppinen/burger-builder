import React from 'react';

import styles from './OrderSummary.module.css';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => (
    <li key={key}>
      {key}: {props.ingredients[key]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your order</h3>
      <p>You chose the following incredients to your burger.</p>
      <ul>{ingredientSummary}</ul>
      <h4>Total: ${props.total.toFixed(2)}</h4>
      <button
        className={styles['continue-btn']}
        onClick={props.didCheckout}>
        CONTINUE
      </button>
      <button
        className={styles['cancel-btn']}
        onClick={props.dismiss}>
        CANCEL
      </button>
    </Aux>
  );
};

export default orderSummary;
