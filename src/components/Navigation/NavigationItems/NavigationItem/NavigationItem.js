import React from 'react'

import styles from './NavigationItem.module.css'

const navigationItem = props => {
  return (
    <li className={styles['navigation-item']}>
      <a
        href={props.link}
        className={ props.active ? styles['active'] : null }
      >{ props.children }</a>
    </li>
  )
}

navigationItem.propTypes = {

}

export default navigationItem
