
export const CardHeader = ({span, title, text}) => {
  return (
    <div className={`d__flex card__header mb-30 flex__wrap justify__content__between`}>
      <div className={`d__flex flex__column`}>
        <span>{span}</span>
        <h3>{title}</h3>
      </div>
      <p className={`fs-14 max-width-550 text__align__end`}>{(text).slice(0,140)}...</p>
    </div>
  )
}
