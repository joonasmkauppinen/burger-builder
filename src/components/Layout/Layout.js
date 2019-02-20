import React from 'react';

import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';

const layout = props => (
  <Aux>
    <div className={styles['toolbar']}>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles['content']}>
      {props.children}
    </main>
  </Aux>
);

export default layout;