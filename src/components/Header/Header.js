import React from 'react'

// import LINKEDIN from '../../img/kindpng_4175039.png'
// import GITHUB from '../../img/GitHub_Logo_White.png'
import arrow from '../../img/arrow.png'

function Header() {

  return (
    <header className="header">
      <div className="container-header">
        <button className="btn btn__name">Beata Rudzka</button>
        <div className="header__inner">
          <div className="header__content">
            <div className="header__content--inner">
              <h1 className="heading-1">
                <div className="header__content-line">
                  <div className="header__content-line--inner">Beata Rudzka</div>
                </div>
                <div className="header__content-line">
                  <div className="header__content-line--inner">Junior Front-end</div>
                </div>
                <div className="header__content-line">
                  <div className="header__content-line--inner">Developer.</div>
                </div>
              </h1>
              <div className="arrow-icon">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header
