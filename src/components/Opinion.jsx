
export const Opinion = ({ user }) => {
    const { name, occupation, company, text, profile_img, stars } = user
  return (
    <div className={`opinion__card bg-FFFFFF`}>
        <div className={`d__flex column__gap__22 align__items__center`}>
            <img src={profile_img} alt={name} height={60} width={60} className="border__radius__50" />
            <div className="d__flex flex__column">
                <p className="fw-bold">{name}</p>
                <span className="fs-14">{occupation} / {company}</span>
            </div>
        </div>
        <p className="my-16">"{(text).slice(0,80)}..."</p>
        <div className={`d__flex`}>
            {Array.from({length: stars}, (_, i) => (
                <i key={i} className="fa-sharp fa-solid fa-star"/>
            ))}
        </div>
    </div>
  )
}
