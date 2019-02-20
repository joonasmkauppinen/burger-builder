import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

state = {
  ingredients: ['bread-top', 'bread-bottom']
}

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build controls</div>
        <div>Total</div>
        <div>Checkout</div>
      </Aux>
    );
  }

}

export default BurgerBuilder;