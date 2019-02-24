import React, { Component } from 'react';

import axios from '../../axios-orders';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary';
import styles from './BurgerBuilder.module.css';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INCREDIENT_PRICES = {
  salad: 0.3,
  bacon: 0.8,
  cheese: 0.5,
  meat: 1.2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 5.6,
    canCheckout: true,
    showModal: false,
    loading: false,
    initError: false
  };

  componentDidMount() {
    axios.get('https://react-burger-builder-sha256.firebaseio.com/ingredients.json')
      .then(res => {
        console.log(res);
        this.setState({ ingredients: res.data });
      })
      .catch(_ => this.setState({ initError: true }));
  }

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

    this.setState({ loading: true });

    console.log('[BurgerBuilder.js] did checkout');

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        address: {
          street: 'Rainbowroad 1337 A 1',
          zipcode: '88519',
          country: 'US of A'
        }
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(res => console.log(res) )
      .catch(err => console.log(err) )
      .finally(_ => this.setState({ loading: false, showModal: false }) );
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.initError ? <p>Failed to connect to server :/</p> : <Spinner />;
   if ( this.state.ingredients ) {
     burger = (
       <Aux>
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

     orderSummary =
        <OrderSummary
          ingredients={this.state.ingredients}
          total={this.state.totalPrice}
          dismiss={this.dismissCheckoutHandler}
          didCheckout={this.didCheckout}
        />
   }

   if ( this.state.loading ) orderSummary = <Spinner />

    return (
      <Aux>
        <Modal
          show={this.state.showModal}
          onDismiss={this.dismissCheckoutHandler}
        >
        { orderSummary }
        </Modal>
        { burger }
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
