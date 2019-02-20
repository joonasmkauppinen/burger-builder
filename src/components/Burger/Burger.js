import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  return (
    <div className={styles['burger']}>
      {props.ingredients.map(ingredient => (
        <BurgerIngredient type={ingredient} />
      ))}
    </div>
  );
};

export default burger;
