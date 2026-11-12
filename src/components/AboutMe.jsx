
export const AboutMe = ({text, location, available, experience}) => {
  return (
    <div className={`about__me__card max-width-550`}>
      <span>SOBRE MÍ</span>
      <h2 className="my-18">Conoce mas sobre mí</h2>
      <p className="mb-16 fs-14 max-width-550">{(text).slice(0,260)}...</p>
      <div className={`about__me__icons d__flex flex__wrap`}>
        <div className={`d__flex align__items__center`}>
          <i className="fa-solid fa-location-crosshairs"/>
          <span>{location}</span>
        </div>
        <div className={`d__flex align__items__center`}>
          <i className="fa-solid fa-briefcase"/>
          <span>{available ? 'Disponible para nuevas oportunidades' : 'Ocupado'}</span>
        </div>
        <div className={`d__flex align__items__center`}>
          <i className="fa-solid fa-calendar"/>
          <span>{experience} de experiencia</span>
        </div>
      </div>
    </div>
  )
}
