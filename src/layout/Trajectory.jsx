import { useState } from "react"
import { CardHeader } from "../components/CardHeader"

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia, dolorem deserunt deleniti voluptatibus at sint est vero. Sint tempora possimus, voluptates architecto amet doloremque illum esse quisquam qui non, suscipit hic nemo, reprehenderit dolorum vel blanditiis totam quam fuga sapiente velit mollitia! Porro, atque distinctio eveniet sint adipisci voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia, dolorem deserunt deleniti voluptatibus at sint est vero. Sint tempora possimus, voluptates architecto amet doloremque illum esse quisquam qui non, suscipit hic nemo, reprehenderit dolorum vel blanditiis totam quam fuga sapiente velit mollitia! Porro, atque distinctio eveniet sint adipisci voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia, dolorem deserunt deleniti voluptatibus at sint est vero. Sint tempora possimus, voluptates architecto amet doloremque illum esse quisquam qui non, suscipit hic nemo, reprehenderit dolorum vel blanditiis totam quam fuga sapiente velit mollitia! Porro, atque distinctio eveniet sint adipisci voluptates?'

const mainData = [
    {
        period: '2023-2024',
        name: 'Datagram',
        description: text
    }
]

export const Trajectory = () => {
    const [data, setData] = useState(mainData)

    return (
    <div className={`template__container bg-F3F1EE table__container`}>
        <CardHeader span='EXPERIENCIA' title='MI TRAYECTORIA' text={text} />
        <table className={``}>
            <thead>
                <tr>
                    <th>Periodo</th>
                    <th>Nombre empresa / proyecto</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {data.map(row => <tr key={row.name}>
                        <td className={`td_dot_container`}>
                            <span className="dot"/>
                            <span className="td_span_text">{row.period}</span>
                        </td>
                        <td>{row.name}</td>
                        <td className={`fs-12`}>{(row.description).slice(0,265)}...</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
