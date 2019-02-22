import React from 'react';

import menuSvg from '../../../../assets/svg/menu.svg';

const burgerMenu = (props) => {
  return (
    <div onClick={ props.click } style={{ height: '24px' }}>
      <img src={ menuSvg } alt="jsx-a11y/alt-text" style={{ height: '100%' }}/>
    </div>
  )
}

export default burgerMenu
