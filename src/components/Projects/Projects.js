import React from 'react'

import MYF__WWW from '../../img/www_myf.jpg'
import MYF_APP from '../../img/app_myf.jpg'
import ANIMOTEL from '../../img/animotel.jpg'
import TO_DO from '../../img/to-do-list.jpg'
import MUSIC_APP from '../../img/music-to-sleep.jpg'



function Projects() {
  return (
    <section className="projects">
      <div className="project">
        <img src={MYF__WWW} alt="move your fit website" className="project__img" />
        <h5 className="project__name">
          Landing page Move your fit
      </h5>
        <p className="project__skill">HTML</p>
        <p className="project__skill">CSS</p>
        <p className="project__skill">JavaScript</p>
        <p className="project__skill">Bootstrap</p>
        <button className="btn btn--github">GitHub</button>
        <button className="btn btn--demo">Podgląd</button>
      </div>

      <div className="project">
        <img src={MYF_APP} alt="move your fit app" className="project__img" />
        <h5 className="project__name">
          Move your fit App
      </h5>
        <p className="project__skill">JavaScript</p>
        <p className="project__skill">React.js</p>
        <p className="project__skill">Redux</p>
        <p className="project__skill">Firebase</p>
        <button className="btn btn--github">GitHub</button>
        <button className="btn btn--demo">Podgląd</button>
      </div>

      <div className="project">
        <img src={ANIMOTEL} alt="animotel website" className="project__img" />
        <h5 className="project__name">
          Hotel dla psów - szablon
      </h5>
        <p className="project__skill">JavaScript</p>
        <p className="project__skill">Sass</p>
        <p className="project__skill">HTML</p>
        <button className="btn btn--github">GitHub</button>
        <button className="btn btn--demo">Podgląd</button>
      </div>

      <div className="project">
        <img src={TO_DO} alt="to-do-app" className="project__img" />
        <h5 className="project__name">
          Aplikacja To do List
      </h5>
        <p className="project__skill">JavaScript</p>
        <p className="project__skill">CSS</p>
        <p className="project__skill">Jquery</p>
        <button className="btn btn--github">GitHub</button>
        <button className="btn btn--demo">Podgląd</button>
      </div>

      <div className="project">
        <img src={MUSIC_APP} alt="aplikacja music to sleep " className="project__img" />
        <h5 className="project__name">
          Aplikacja Music to sleep
      </h5>
        <p className="project__skill">JavaScript</p>
        <p className="project__skill">CSS</p>
        <p className="project__skill">HTML</p>
        <button className="btn btn--github">GitHub</button>
        <button className="btn btn--demo">Podgląd</button>
      </div>

    </section>
  )
}

export default Projects
