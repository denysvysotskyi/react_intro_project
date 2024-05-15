import './Main.css'
import List from '../List/List'
import Button from '../Button/Button'
import { data, differences } from '../Data/data'
import { buttons } from '../Button/Button'
import { useState } from 'react'

  const Main = () => {

    const [ contentType, setContentType ] = useState(null)
    const handleClick = type => setContentType(type)

    return (
      <main>
        <section>
          <h3> Наші переваги </h3>

          <ul>
            {
              data.map(item => <List key = {item.id} {...item} /> )
            }
          </ul>
        </section>

        <section>
          <h3> Чим ми відрізняємось від інших </h3>

          <ul>
            {
              buttons.map(button => <Button key ={button.id} {...button}
                                                                 isActive={contentType === button.name}
                                                                 onClick={() => handleClick(button.name)}>
              {button.name}
            </Button>
            )}
          </ul>

          {!contentType ? <p className={'warning'}> Click on button </p> : null}

          <p> {differences[contentType]} </p>

        </section>
      </main>
    )
  }

export default Main