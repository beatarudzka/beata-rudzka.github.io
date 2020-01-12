import React from 'react'

import HTML from '../../img/html.png'
import CSS from '../../img/css.svg'
import JS from '../../img/js.svg'
import REACT from '../../img/react.png'
import GULP from '../../img/gulp.svg'
import GIT from '../../img/git.png'

function Skills() {
  return (
    <section className="skills">
      <div className="skill">
        <img src={HTML} alt="html" className="skill__image" />
        <h4 className="heading-4 heading-4--dark">
          HTML
        </h4>
        <p className="skill__text">
          Staram się programować semantyczne strony, stosując obowiązujące standardy (HTML5) oraz metodologię BEM.
          Ma to pozytywny wpływ na pozycjonowanie mojej strony.
        </p>
      </div>
      <div className="skill">
        <img src={CSS} alt="css" className="skill__image" />
        <h4 className="heading-4 heading-4--dark">
          CSS
        </h4>
        <p className="skill__text">
          Moje projekty są responsywne, a także stosuję nowoczesne modele projektowania flexbox czy grid.
          Do usprawnienia pracy ze stylowaniem używam preprocesora Sass.
        </p>
      </div>
      <div className="skill">
        <img src={JS} alt="javascript" className="skill__image" />
        <h4 className="heading-4 heading-4--dark">
          JavaScript
        </h4>
        <p className="skill__text">
          Dzięki znajomości Javascriptu jestem w stanie robić proste strony oraz aplikacje.
          W przyszłości, chcę się nauczyć Node.js do tworzenia backendu.
        </p>
      </div>
      <div className="skill">
        <img src={REACT} alt="react" className="skill__image" />
        <h4 className="heading-4 heading-4--dark">
          React.js
        </h4>
        <p className="skill__text">
          Czuję się komfortowo tworząc projekty w tej bibliotece. Obecnie uczę się stosować Redux do aplikacji w React.js.
        </p>
      </div>
      <div className="skill">
        <img src={GULP} alt="gulp" className="skill__image" />
        <h4 className="heading-4 heading-4--dark">
          Gulp
        </h4>
        <p className="skill__text">
          Do uruchomienia preprocesora CSS, jego minifikacji oraz automatycznego przeładowania strony używam Gulp4.
      </p>
      </div>
      <div className="skill">
        <img src={GIT} alt="git" className="skill__image" />
        <h4 className="heading-4 heading-4--dark">
          Git
        </h4>
        <p className="skill__text">
          Od samego początku nauki programowania służy mi do zapisywania postępu w kodzie oraz organizacji pracy zespołu nad jednym kodem.
        </p>
      </div>
    </section>
  )
}

export default Skills