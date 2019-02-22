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

  modifyIncredientsHandler = (type, amount) => {
    const updatedIncredients = { ...this.state.ingredients };
    updatedIncredients[type] += amount;
    const incredientPrice = INCREDIENT_PRICES[type] * amount;
    const newPrice = this.state.totalPrice + incredientPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIncredients });
    this.updateCanCheckoutState(updatedIncredients);
  };

  checkoutHandler = () => {
    this.setState({ showModal: true });
  };

  dismissCheckoutHandler = () => {
    console.log('Checkout dismissed');
    this.setState({ showModal: false });
  };

  didCheckout = () => {
    alert('TODO: did checkout');
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    
    return (
      <Aux>
        <Modal
          show={this.state.showModal}
          onDismiss={this.dismissCheckoutHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            total={this.state.totalPrice}
            dismiss={this.dismissCheckoutHandler}
            didCheckout={this.didCheckout}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <div className={styles['card']}>
          <BuildControls
            incredients={this.state.ingredients}
            onAdd={this.modifyIncredientsHandler}
            onRemove={this.modifyIncredientsHandler}
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
