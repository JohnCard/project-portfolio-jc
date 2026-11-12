import { AboutMe } from '../components/AboutMe'
import { Presentation } from '../components/Presentation'
import { TemplateCard } from '../components/TemplateCard'
import { Stack } from './Stack'
import { Projects } from './Projects'
import { Trajectory } from './Trajectory'
import chandler from '../img/chandler_bing.webp'
import joey from '../img/joey.jpg'
import bootstrap from '../img/bootstrap.svg'
import css from '../img/css.png'
import dj from '../img/dj.svg'
import html from '../img/html.png'
import js from '../img/js.png'
import python from '../img/python.webp'
import react from '../img/react.webp'
import rf from '../img/rf.png'
import tailwind from '../img/tailwind.webp'
import personal_blog from '../img/personal_blog.png'
import position_example from '../img/position_example.png'
import rick_and_morty from '../img/rick_morty_app.png'
import crud from '../img/crud.png'
import crud_table from '../img/crud_table.png'
import table_ui_crud from '../img/data_ui_table.png'
import task_crud from '../img/task_crud.png'
import { ContactSection } from './ContactSection'
import { Testimonies } from './Testimonies'
import { Footer } from './Footer'

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos assumenda, repudiandae excepturi perspiciatis mollitia nostrum nulla corporis dignissimos quaerat voluptatem aperiam voluptates sequi perferendis adipisci sunt vel cum animi nesciunt. Velit doloremque est quae facilis quia, dolores repudiandae rerum, quam laboriosam perspiciatis, ullam hic delectus accusantium. Tempore, enim veniam? Quasi optio soluta ut qui quis cupiditate sit velit possimus quas fugit voluptatum laborum temporibus excepturi assumenda eaque quia doloremque, nobis doloribus dolor totam id ipsa! Aperiam, eaque. Deleniti animi vero soluta fugiat similique blanditiis quisquam possimus corporis id quia quos itaque aut aperiam, tempore numquam cupiditate dolores! Necessitatibus delectus voluptatem quas deleniti quod natus dolor reiciendis repellat laborum? Nihil, velit dolorum magni expedita quas ducimus minima non a dolores.'

const stack = [
  {
    name: 'bootstrap',
    img: bootstrap
  },
  {
    name: 'css',
    img: css
  },
  {
    name: 'django',
    img: dj
  },
  {
    name: 'html',
    img: html
  },
  {
    name: 'javascript',
    img: js
  },
  {
    name: 'python',
    img: python
  },
  {
    name: 'react',
    img: react
  },
  {
    name: 'rest framework',
    img: rf
  },
  {
    name: 'tailwind',
    img: tailwind
  },
]

const projects = [
  {
    name: 'Personal blog',
    description: 'Personal portfolio blog showcasing my full-stack web development skills. Django, Django REST Framework, JavaScript, React, Bootstrap, and Material UI, it demonstrates REST API integration, dynamic templates, and features my projects, technical expertise, and contact information.',
    img: personal_blog,
    tools: ['html', 'css', 'bootstrap'],
    demo__link: 'https://johncard.github.io/Personal-blog/',
    github__link: 'https://github.com/JohnCard/Personal-blog'
  },
  {
    name: 'Personal blog | react',
    description: 'Personal portfolio blog showcasing my full-stack web development skills. Django, Django REST Framework, JavaScript, React, Bootstrap, and Material UI, it demonstrates REST API integration, dynamic templates, and features my projects, technical expertise, and contact information.',
    img: personal_blog,
    tools: ['css', 'bootstrap', 'react'],
    demo__link: 'https://juan-sanchez.surge.sh/',
    github__link: 'https://github.com/JohnCard/react-blog'
  },
  {
    name: 'Demostrative position example',
    description: 'position demostrative values (example | task)',
    img: position_example,
    tools: ['css', 'hmtl'],
    demo__link: 'https://johncard.github.io/demostrative-position/',
    github__link: 'https://github.com/JohnCard/demostrative-position'
  },
  {
    name: 'Rick & Morty app',
    description: 'Aplicación frontend desarrollada con JavaScript, HTML y Bootstrap, que consume las APIs de Rick and Morty y PokéAPI. Permite explorar, buscar y filtrar personajes, episodios y localizaciones mediante distintos criterios, visualizar personajes en tablas con paginación y consultar personajes por ID. Además, incorpora una sección independiente para buscar y agregar Pokémon por nombre.',
    img: rick_and_morty,
    tools: ['html', 'bootstrap', 'JS'],
    demo__link: 'https://rick-and-morty-practica1.surge.sh/',
    github__link: 'https://github.com/JohnCard/rick-and-morty'
  },
  {
    name: 'pokemon/users crud',
    description: 'Aplicación frontend desarrollada con JavaScript, HTML y Bootstrap, que implementa dos secciones CRUD consumiendo PokéAPI y JSONPlaceholder. La primera permite consultar Pokémon por nombre y gestionar entrenadores mediante operaciones de creación, edición y eliminación. La segunda ofrece una gestión CRUD de usuarios, mostrando información personal, correos electrónicos, direcciones y datos empresariales.',
    img: crud,
    tools: ['html', 'bootstrap', 'JS'],
    demo__link: 'https://pokemon-crud-kohl.vercel.app/',
    github__link: 'https://github.com/JohnCard/pokemon-crud'
  },
  {
    name: 'Users table crud',
    description: 'Implementación de React Data Table Component combinado con Bootstrap para gestionar y visualizar datos mediante tablas dinámicas, incorporando búsqueda y operaciones CRUD en una interfaz organizada e interactiva con "react-data-table-component"',
    img: crud_table,
    tools: ['bootstrap', 'react', 'react-data-table-component'],
    demo__link: 'https://datatableexample.surge.sh/',
    github__link: 'https://github.com/JohnCard/project-users-crud-data-table-table-jc'
  },
  {
    name: 'Users ui data table crud',
    description: 'Implementación de React Data Table Component con Material UI para gestionar usuarios mediante operaciones CRUD, filtrado individual por ID y visualización de detalles en modales. Incluye Notistack para notificaciones de éxito y error en las peticiones.',
    img: table_ui_crud,
    tools: ['react ui', 'react-data-table-component'],
    demo__link: 'https://data-table-ui.surge.sh/users-table',
    github__link: 'https://github.com/JohnCard/react-ui-table-users'
  },
  {
    name: 'task CRUD',
    description: 'Aplicación frontend en React y Material UI que consume una API REST para gestionar tareas mediante operaciones CRUD, con tablas dinámicas, modales para crear y actualizar registros, y consultas individuales para visualizar los detalles de cada tarea.',
    img: task_crud,
    tools: ['django', 'rest framework', 'react ui'],
    demo__link: 'https://youtu.be/MkYkn0NjlJ8',
    github__link: 'https://github.com/JohnCard/'
  }
]

const user__testimonies = [
  {
    name: 'John Doe',
    text: text,
    company: 'Datagram',
    occupation: 'Web develop',
    profile_img: chandler,
    stars: 3
  },
  {
    name: 'John Doe',
    text: text,
    company: 'Datagram',
    occupation: 'Web develop',
    profile_img: chandler,
    stars: 3
  },
  {
    name: 'John Doe',
    text: text,
    company: 'Datagram',
    occupation: 'Web develop',
    profile_img: chandler,
    stars: 3
  },
  {
    name: 'John Doe',
    text: text,
    company: 'Datagram',
    occupation: 'Web develop',
    profile_img: chandler,
    stars: 3
  },
  {
    name: 'John Doe',
    text: text,
    company: 'Datagram',
    occupation: 'Web develop',
    profile_img: chandler,
    stars: 3
  },
  {
    name: 'John Doe',
    text: text,
    company: 'Datagram',
    occupation: 'Web develop',
    profile_img: chandler,
    stars: 3
  }
]

export const Home = () => {
  return (
    <>
      <TemplateCard
        template={<Presentation name='Juan Carlos' profession='Desarrollador FullStack' text={text} />}
        img={<img src={chandler} alt="chandler bing" className={`template__img`} />}
        bg='F3F1EE'
      />
      <TemplateCard
        template={<AboutMe text={text} location='Tlaxcala, tlax' available={true} experience='1 año' />}
        img={<img src={joey} alt='joey' className={`template__img`} />}
        elem='img'
      />
      <Stack stack={stack} />
      <Projects projects={projects} />
      <Trajectory/>
      <Testimonies testimonies={user__testimonies} />
      <ContactSection/>
      <Footer/>
    </>
  )
}
