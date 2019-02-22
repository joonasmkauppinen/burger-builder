import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar openDrawer={this.sideDrawerOpenHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          closeDrawer={this.sideDrawerClosedHandler}
        />
        <main className={styles['content']}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
