import React from 'react'

import LINKEDIN from '../../img/linkedin-logo.png'
import GITHUB from '../../img/GitHub_Logo_White.png'

function Header() {
  return (
    <header className="header">
      <h3 className="heading-3">
        Junior Web Developer
      </h3>
      <h1 className="heading-1">Beata Rudzka</h1>
      <button className="btn">Więcej o mnie</button>
      <div className="header__link">Portale społecznościowe:</div>
      <div className="header__logo">
        <img src={GITHUB} alt="github logo" className="header__logo--github" />
        <img src={LINKEDIN} alt="linkedin logo" className="header__logo--linkedin" />
      </div>
    </header>
  )
}

export default Header
