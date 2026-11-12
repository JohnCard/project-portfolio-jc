import { CardHeader } from '../components/CardHeader'
import { Opinion } from '../components/Opinion'

export const Testimonies = ({testimonies=[]}) => {
  return (
    <div className='template__container'>
        <CardHeader span='TESTIMONIOS' title='Lo que otros dicen' text={`Algunas opiniones de personas con las que he trabajado`} />
        <div className='testimonies__container d__flex flex__wrap gap__30 justify__content__center'>
            {testimonies.map((testimony, index) => <Opinion key={`opinion-${index}`} user={testimony} />)}
        </div>
    </div>
  )
}
