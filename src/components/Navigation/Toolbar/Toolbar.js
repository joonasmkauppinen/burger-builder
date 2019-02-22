import React from 'react';

import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BurgerMenu from '../SideDrawer/BurgerMenu/BurgerMenu';


const toolbar = props => (
  <header className={ styles['toolbar'] }>
    <BurgerMenu click={ props.openDrawer }>MENU</BurgerMenu>
    <Logo height="32px" />
    <nav className={ styles['desktop-only'] }>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default toolbar;
