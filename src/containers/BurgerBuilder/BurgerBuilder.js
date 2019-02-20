import React, { Component } from 'react';

import styles from './BurgerBuilder.module.css';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INCREDIENT_PRICES = {
  salad: 0.3,
  bacon: 0.8,
  cheese: 0.5,
  meat: 1.2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice: 5.6,
    canCheckout: true,
    showModal: false
  };

  updateCanCheckoutState = ingredients => {
    const sum = Object.values({ ...ingredients }).reduce(
      (sum, el) => sum + el,
      0
    );
    this.setState({ canCheckout: sum > 0 });
  };

  addIncredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIncredients = { ...this.state.ingredients };
    updatedIncredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INCREDIENT_PRICES[type];

    this.setState({ totalPrice: newPrice, ingredients: updatedIncredients });
    this.updateCanCheckoutState(updatedIncredients);
  };

  removeIncredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIncredients = { ...this.state.ingredients };
    updatedIncredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INCREDIENT_PRICES[type];

    this.setState({ totalPrice: newPrice, ingredients: updatedIncredients });
    this.updateCanCheckoutState(updatedIncredients);
  };

  checkoutHandler = () => {
    this.setState({showModal: true});
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.showModal}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <div className={styles['card']}>
          <BuildControls
            incredients={this.state.ingredients}
            onAdd={this.addIncredientHandler}
            onRemove={this.removeIncredientHandler}
            disabled={disabledInfo}
          />
          <hr />
          <div className={styles['total']}>
            Total: <strong>${this.state.totalPrice.toFixed(2)}</strong>
          </div>
          <button
            className={styles['checkout']}
            disabled={!this.state.canCheckout}
            onClick={this.checkoutHandler}
          >
            CHECKOUT
          </button>
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
