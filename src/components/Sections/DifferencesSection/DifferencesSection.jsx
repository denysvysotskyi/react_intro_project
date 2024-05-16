import Button, { buttons, differences } from '../../Button/Button'
import { useState } from 'react'

const DifferencesSection = () => {

  const [ contentType, setContentType ] = useState(null)
  const handleClick = type => setContentType(type)

  return (
    <section>
      <h3> Чим ми відрізняємось від інших </h3>

      <ul>
        {
          buttons.map(button => <Button key={button.id} {...button}
                                        isActive={contentType === button.name}
                                        onClick={() => handleClick(button.name)}>
              {button.name}
            </Button>
          )}
      </ul>

      {!contentType ? <p className={'warning'}> Click on button </p> : null}

      <p> {differences[contentType]} </p>

    </section>
  )
}

export default DifferencesSection