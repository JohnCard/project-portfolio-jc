import styles from '../styles/nav.module.css'

export const Nav = () => {
  return (
    <>
      <div className={`${styles.nav__top__container}`}>
        <nav className={`${styles.nav__flex} justify__content__between d__flex`}>
          <div className={`d__flex ${styles.nav__titles} align__items__center`}>
            <i className="fa-solid fa-bars"/>
            <a href="#" className={`text-white`}><h4>Navbar</h4></a>
          </div>
          <ul className={`${styles.nav__row} align__items__center`}>
            <li className={`btn`}><a href="#" target='_blank'>item</a></li>
            <li className={`btn`}><a href="#" target='_blank'>item</a></li>
            <li className={`btn`}><a href="#" target='_blank'>item</a></li>
            <li className={`btn`}><a href="#" target='_blank'>item</a></li>
            <li className={`btn`}><a href="#" target='_blank'>item</a></li>
            <li><button type='button' className={`btn btn__dark__theme`}>Download CSV</button></li>
          </ul>
        </nav>
      </div>
      <nav className={`${styles.nav__hidden__container}`}>
        <ul className={`${styles.nav__column} d__flex flex__column`}>
          <li><i className='fa-solid fa-house'/><a href="#" target='_blank'>item</a></li>
          <li><i className='fa-solid fa-eye'/><a href="#" target='_blank'>item</a></li>
          <li><i className='fa-solid fa-face-smile'/><a href="#" target='_blank'>item</a></li>
          <li><i className='fa-solid fa-house'/><a href="#" target='_blank'>item</a></li>
          <li><i className='fa-solid fa-face-smile'/><a href="#" target='_blank'>item</a></li>
        </ul>
      </nav>
    </>
  )
}
