import React from 'react';

import styles from './BuildControls.module.css';
import BuildContorl from './BuildControl/BuildControl';

const controls = [
  { label: 'Beef', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' }
];

const buildControls = props => (
  <div className={styles['build-controls']}>
    {controls.map(ctrl => (
      <BuildContorl
        key={ctrl.label}
        label={ctrl.label}
        amount={props.incredients[ctrl.type]}
        increace={() => props.onAdd(ctrl.type)}
        decreace={() => props.onRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
  </div>
);

export default buildControls;
