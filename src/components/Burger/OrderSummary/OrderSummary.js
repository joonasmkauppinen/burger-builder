import React from 'react';

import Aux from '../../../hoc/Auxiliary';

const orderSummary = props => {

  const ingredientSummary = Object.keys(props.ingredients)
  .map(key => <li key={key}>{key}: {props.ingredients[key]}</li>);

  return (
    <Aux>
      <h3>Your order</h3>
      <p>You chose the following incredients to your burger.</p>
      <ul>
        {ingredientSummary}
      </ul>
    </Aux>
  )
}

export default orderSummary;