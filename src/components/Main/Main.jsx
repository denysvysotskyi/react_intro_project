import './Main.css'
import List from '../List/List'
import Button from '../Button/Button'
import { data, differences } from '../Data/data'
import { useState } from 'react'

  const Main = () => {
    const [ content, setContent ] = useState('Click on your button')
    const handleClick = type => setContent(type)

    return (
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

          <Button onClick={ () => handleClick('clickedButton1') }> Click 1</Button>
          <Button onClick={ () => handleClick('clickedButton2') }> Click 2</Button>
          <Button onClick={ () => handleClick('clickedButton3') }> Click 3</Button>

          <p> { differences[content] } </p>
        </section>
      </main>
    )
}

export default Main