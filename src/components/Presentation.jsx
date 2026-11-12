
export const Presentation = ({name, profession, text}) => {
  return (
    <div className={`presentation__card max-width-550`}>
      <span>HOLA, SOY</span>
      <h1 className={`my-14`}>{name}</h1>
      <h3>{profession}</h3>
      <p className='my-16 fs-14 max-width-550'>{(text).slice(0,200)}...</p>
      <button type="button" className={`btn btn__dark__theme mr-16 mb-16 d__flex justify__content__evenly align__items__center`}><label>ver mis proyectos</label><i className="fa-solid fa-arrow-right fs-16 text-white"/></button>
      <button type="button" className={`btn btn__dark__theme`}>Contáctame</button>
      <ul className={`d__flex mt-18 presentation__icons flex__wrap`}>
        <li><a href="#"><i className="fa-brands fa-linkedin"/></a></li>
        <li><a href="#"><i className="fa-brands fa-github"/></a></li>
        <li><a href="#"><i className="fa-brands fa-youtube"/></a></li>
        <li><a href="#"><i className="fa-brands fa-facebook"/></a></li>
        <li><a href="#"><i className="fa-brands fa-twitter"/></a></li>
        <li><a href="#"><i className="fa-brands fa-instagram"/></a></li>
        <li><a href="#"><i className="fa-brands fa-telegram"/></a></li>
        <li><a href="#"><i className="fa-brands fa-apple"/></a></li>
      </ul>
    </div>
  )
}
