
export const Skill = ({skill}) => {
    const {img, name} = skill
  return (
    <div className={`skill d__flex flex__column align__items__center`}>
        <img src={img} alt={name} height={40} />
        <span className="mt-6">{name}</span>
    </div>
  )
}
