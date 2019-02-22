import React from 'react';

import burgerLogo from '../../assets/svg/burger_logo.png';
import styles from './Logo.module.css';

const logo = props => {

  const inlineStyles = {
    padding: props.padding ? '16px' : null,
    height: props.height ? props.height : null,
    backgroundColor: props.background ? '#ff1966' : null
  }

  return (
  <div className={ styles['logo'] } style={ inlineStyles }>
    <img
      src={burgerLogo}
      alt="jsx-a11y/alt-text"
    />
  </div>
  )
};

export default logo;
