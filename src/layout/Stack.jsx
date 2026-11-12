import { CardHeader } from '../components/CardHeader'
import { Skill } from '../components/Skill'

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia, dolorem deserunt deleniti voluptatibus at sint est vero. Sint tempora possimus, voluptates architecto amet doloremque illum esse quisquam qui non, suscipit hic nemo, reprehenderit dolorum vel blanditiis totam quam fuga sapiente velit mollitia! Porro, atque distinctio eveniet sint adipisci voluptates?'

export const Stack = ({stack=[]}) => {
  return (
    <div className={`template__container bg-F3F1EE`}>
      <CardHeader span='HABILIDADES' title='Tecnologías que uso' text={text} />
      <div className={`stack d__flex mt-30 flex__wrap`}>
        {stack.map(skill => <Skill skill={skill} key={skill.name} />)}
      </div>
    </div>
  )
}
