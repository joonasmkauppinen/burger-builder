import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INCREDIENT_PRICES = {
  salad: 0.3,
  bacon: 0.8,
  cheese: 0.5,
  meat: 1.2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5.2
  };

  addIncredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIncredients = {
      ...this.state.ingredients
    };
    updatedIncredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INCREDIENT_PRICES[type];

    this.setState({ totalPrice: newPrice, ingredients: updatedIncredients });
  };

  removeIncredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIncredients = {
      ...this.state.ingredients
    };
    updatedIncredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INCREDIENT_PRICES[type];

    this.setState({ totalPrice: newPrice, ingredients: updatedIncredients });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          incredients={this.state.ingredients}
          onAdd={this.addIncredientHandler}
          onRemove={this.removeIncredientHandler}
          disabled={disabledInfo}
        />

        <div>Total</div>
        <div>Checkout</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
