
export const ContactForm = () => {
  return (
    <form>
      <div className={`form__contact__container d__grid`}>
        <input type="text" name="name" placeholder="Nombre" className="" />
        <input type="email" name="email" placeholder="Correo electrónico" className="" />
        <input type="text" name="issue" placeholder="Asunto" className="full__columns" />
        <textarea name="message" placeholder="Mensaje" className="full__columns" />
        <input type="submit" className="input__submit btn btn__dark__theme" />
      </div>
    </form>
  )
}
