
export const Footer = () => {
  return (
    <footer className={`footer__container bg-263746 d__flex justify__content__between text-white flex__wrap row__gap__20 align__items__center`}>
        <div className="fs-12 max__width__300">
            <h4>Logo</h4>
            <p>Desarrollando ideas para un mejor futuro</p>
            <span className="mt-14 d-block">@ 2026 | Juan Carlos Sánchez Martínez. Todos los derechos reservados</span>
        </div>
        <nav>
            <ul className={`d__flex flex__wrap`}>
                <li className={`btn`}><a href="#" target="_blank" className="text-white">Inicio</a></li>
                <li className={`btn`}><a href="#" target="_blank" className="text-white">Sobre mí</a></li>
                <li className={`btn`}><a href="#" target="_blank" className="text-white">Proyectos</a></li>
                <li className={`btn`}><a href="#" target="_blank" className="text-white">Contacto</a></li>
            </ul>
        </nav>
        <div>
            <nav>
                <ul className={`d__flex column__gap__10`}>
                    <li><a href=""><i className="fa-brands fa-linkedin"/></a></li>
                    <li><a href=""><i className="fa-brands fa-github"/></a></li>
                    <li><a href=""><i className="fa-solid fa-envelope"/></a></li>
                    <li><a href=""><i className="fa-brands fa-telegram"/></a></li>
                </ul>
            </nav>
            <span className={`mt-12 d-block`}>Hecho en México</span>
        </div>
    </footer>
  )
}
