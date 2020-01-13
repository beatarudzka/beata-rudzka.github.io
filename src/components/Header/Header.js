import React from 'react'

import LINKEDIN from '../../img/kindpng_4175039.png'
import GITHUB from '../../img/GitHub_Logo_White.png'

function Header() {
  return (
    <header className="header">
      <h1 className="heading-1">Beata Rudzka</h1>
      <div className="header__link">Portale społecznościowe:</div>
      <div className="header__logo">
        <img src={GITHUB} alt="github logo" className="header__logo--github" />
        <img src={LINKEDIN} alt="linkedin logo" className="header__logo--linkedin" />
      </div>
      <button className="btn header__btn">Więcej o mnie</button>
    </header>
  )
}

export default Header
