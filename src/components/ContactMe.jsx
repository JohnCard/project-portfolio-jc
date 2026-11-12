
export const ContactMe = ({email, phone_number, location}) => {
  return (
    <div className={`contact__data__container d__flex flex__column`}>
        <span className="fw-bold">CONTACTO</span>
        <h3>Hablemos</h3>
        <p className="fs-14">Tienes un proyecto en mente o una oportunidad?</p>
        <p className="fs-14">¡Me encantaría saber de ti!</p>
        <div className={`d__flex contact__icon align__items__center`}><i className="fa-solid fa-envelope"/><span className="fs-14">{email}</span></div>
        <div className={`d__flex contact__icon align__items__center`}><i className="fa-solid fa-phone"/><span className="fs-14">{phone_number}</span></div>
        <div className={`d__flex contact__icon align__items__center`}><i className="fa-solid fa-location-dot"/><span className="fs-14">{location}</span></div>
    </div>
  )
}
