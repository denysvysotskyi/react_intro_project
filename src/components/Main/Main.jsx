import './Main.css'
import List from '../List/List'
import { data } from '../Data/data'

const Main = () => (
  <main>
    <section>
      <h3> Наші переваги </h3>

      <ul>
        <List title = { data[0].title } description = { data[0].description }/>
        <List { ...data[1] } />
        <List { ...data[2] } />
        <List { ...data[3] } />
      </ul>
    </section>
    <section>
      <h3> Чим ми відрізняємось від інших </h3>

    </section>
  </main>
)

export default Main