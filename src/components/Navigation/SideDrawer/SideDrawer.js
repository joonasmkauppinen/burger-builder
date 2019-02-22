import React from 'react'

import styles from './SideDrawer.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = props => {

 let classes = [ styles['side-drawer'] ];
 classes.push( props.show ? styles['open'] : styles['close'] );

  return (
    <Aux>
      <Backdrop show={ props.show } onDismiss={ props.closeDrawer } />
      <div className={ classes.join(' ') }>
        <Logo height="120px" background padding/>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
};

export default sideDrawer;
