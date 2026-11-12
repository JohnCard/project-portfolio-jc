
export const Project = ({project}) => {
  const {name, description, tools, demo__link, github__link, img} = project

  return (
    <div className={`project`}>
      <img src={img} alt={name} className={`project__img w__100`} />
      <div className={`project__data bg-FFFFFF fs-14`}>
        <h4 className={``}>{name}</h4>
        <p className="my-14">{(description).slice(0, 80)}...</p>
        <div className={`d__flex project__tools mb-14 flex__wrap`}>{tools.map(tool => <span key={tool} className={`tool__span bg-E1E5EB`}>{tool}</span>)}</div>
        <div className={`d__flex project__links`}>
            <a href={demo__link} target="_blank" className={`d__flex align__items__center project__link`}><i className="fa-solid fa-arrow-up-right-from-square"/><span>ver demo</span></a>
            <a href={github__link} target="_blank" className={`d__flex align__items__center project__link`}><i className="fa-brands fa-github"/><span>ver código</span></a>
        </div>
      </div>
    </div>
  )
}
