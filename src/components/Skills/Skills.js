import React from 'react'


function Skills() {
  return (
    <section className="skills">
      <div className="skill">
        <img src="../../img/html.png" alt="html" className="skill_image" />
        <h4 className="heading-4">
          HTML
        </h4>
        <p className="skill_text">
          Staram się programować semantyczne strony, stosując obowiązujące standardy (HTML5) oraz metodologię BEM.
          Ma to pozytywny wpływ na SEO (search engine optimimization), czyli na tak zwane pozycjonowanie naszej strony.
        </p>
      </div>
      <div className="skill">
        <img src="../../img/css.svg" alt="css" className="skill_image" />
        <h4 className="heading-4">
          CSS
        </h4>
        <p className="skill_text">
          Moje projekty są responsywne a także stosuję nowoczesne modele projektowania flexbox czy grid.
          Do usprawnienia pracy ze stylowaniem używam preprocesora Sass.
        </p>
      </div>
      <div className="skill">
        <img src="../../img/js.svg" alt="javascript" className="skill_image" />
        <h4 className="heading-4">
          JavaScript
        </h4>
        <p className="skill_text">
          Dzięki znajomości Javascriptu jestem w stanie robić proste strony oraz aplikacje.
          W przyszłości, chcę się nauczyć Node.js do tworzenia backendu.
        </p>
      </div>
      <div className="skill">
        <img src="../../img/react.png" alt="react" className="skill_image" />
        <h4 className="heading-4">
          React.js
        </h4>
        <p className="skill_text">
          Czuję się komfortowo tworząc projekty w tej bibliotece. Obecnie uczę się stosować Redux do aplikacji w React.js.
        </p>
      </div>
      <div className="skill">
        <img src="gulp" alt="gulp" className="skill_image" />
        <h4 className="heading-4">
          Gulp
        </h4>
        <p className="skill_text">
          Do uruchomienia preprocesora CSS, jego minifikacji oraz automatycznego przeładowania strony używam Gulp4.
      </p>
      </div>
      <div className="skill">
        <img src="../../img/git.png" alt="git" className="skill_image" />
        <h4 className="heading-4">
          Git
        </h4>
        <p className="skill_text">
          Git jest moim niezbędnikiem w trakcie projektów grupowych.
           Pojęcia takie jak merge, rebase czy checkout nie są mi obce.
        </p>
      </div>
    </section>
  )
}

export default Skills