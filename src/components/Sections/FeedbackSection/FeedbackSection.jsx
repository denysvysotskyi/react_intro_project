import Button from '../../Button/Button'
import { useState } from 'react'

const FeedbackSection = () => {
  const [ name, setName ] = useState('')
  const [ reason, setReason ] = useState('help')

  const handleNameChange = e => setName(e.target.value)
  const handleReasonChange = e => setReason(e.target.value)

  return(
    <section>
      <h3> Обратний зв'язок </h3>
      <form>
        <label htmlFor='name'> Ваше ім'я </label>
        <input type='text'
               id='name'
               className='control'
               value={ name }
               onChange={ handleNameChange }
        />
        <label htmlFor='reason'> Причина звернення </label>
        <select id='reason'
                className='control'
        value={ reason }
        onChange={ handleReasonChange }>
          <option value='help'> Потрібна допомога </option>
          <option value='error'> Виникла помилка </option>
          <option value='notWorked'> Щось не працює </option>
        </select>
        <Button> Відправити </Button>
      </form>
    </section>
  )
}

export default FeedbackSection