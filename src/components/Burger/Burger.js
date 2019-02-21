import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let userIngredients = Object.keys(props.ingredients)
    .map(ingredientKey =>
      [...Array(props.ingredients[ingredientKey])].map((_, i) => (
        <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);

  if (userIngredients.length === 0)
    userIngredients = (
      <p>
        Add some ingredients{' '}
        <span role="img" aria-label="jsx-a11y/accessible-emoji">
          🥗
        </span>
      </p>
    );

  return (
    <div className={styles['burger']}>
      <BurgerIngredient type="bread-top" />
        {userIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
