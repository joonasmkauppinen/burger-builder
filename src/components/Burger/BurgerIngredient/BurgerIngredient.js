import React from 'react';
import propTypes from 'prop-types';

import styles from './BurgerIngredient.module.css';

const BREAD_BOTTOM = 'bread-bottom',
      BREAD_TOP    = 'bread-top',
      SEEDS_1      = 'seeds-1',
      SEEDS_2      = 'seeds-2',
      MEAT         = 'meat',
      CHEESE       = 'cheese',
      SALAD        = 'salad',
      BACON        = 'bacon'


const burgerIngredient = props => {

  let ingreadient = null;

  switch ( props.type ) {
    case ( BREAD_BOTTOM ):
      ingreadient = <div className={styles[BREAD_BOTTOM]}></div>;
    break;

    case ( BREAD_TOP  ):
      ingreadient = (
        <div className={styles[BREAD_TOP]}>
          <div className={styles[SEEDS_1]}></div>
          <div className={styles[SEEDS_2]}></div>
        </div>
      );
    break;

    case ( MEAT ):
      ingreadient = <div className={styles[MEAT]}></div>;
    break;

    case ( CHEESE ):
      ingreadient = <div className={styles[CHEESE]}></div>;
    break;

    case ( SALAD ):
      ingreadient = <div className={styles[SALAD]}></div>;
    break;

    case ( BACON ):
      ingreadient = <div className={styles[BACON]}></div>;
    break;

    default:
      ingreadient = null;
    break;
  }

  return ingreadient;

}

burgerIngredient.propTypes = {
  type: propTypes.string.isRequired
}

export default burgerIngredient;