import { CardHeader } from "../components/CardHeader"
import { Project } from "../components/Project"

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia, dolorem deserunt deleniti voluptatibus at sint est vero. Sint tempora possimus, voluptates architecto amet doloremque illum esse quisquam qui non, suscipit hic nemo, reprehenderit dolorum vel blanditiis totam quam fuga sapiente velit mollitia! Porro, atque distinctio eveniet sint adipisci voluptates?'

export const Projects = ({projects=[]}) => {
  return (
    <div className={`template__container bg-F5F7FC`}>
        <CardHeader span='PROYECTOS' title='Mis proyectos' text={text}/>
        <div className={`projects__container d__grid`}>{projects.map(project => <Project key={project.name} project={project} />)}</div>
    </div>
  )
}
