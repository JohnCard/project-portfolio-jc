
export const TemplateCard = ({img, template, elem='template', bg=''}) => {
  return (
    <div className={`template__container bg-${bg}`}>
      {elem == 'template' ? 
        <div className={`d__flex inner__template align__items__center`}>
          {template}
          {img}
        </div> : 
        <div className={`d__flex inner__template align__items__center`}>
          {img}
          {template}
        </div>
      }
    </div>
  )
}
