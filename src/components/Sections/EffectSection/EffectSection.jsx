import './EffectSection.css'
import Button from '../../Button/Button'
import Modal from '../../Modal/Modal'
import { useState } from 'react'

const EffectSection = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return(
    <section>
      <h3> Модальне вікно </h3>
      <Button onClick={ openModal }> Відкрити інформацію </Button>
      <Modal open={ isModalOpen }>
        <div className={'close'} onClick={ closeModal }> X </div>
        <h3> MODAL </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          A accusamus adipisci aliquid beatae culpa cumque delectus deleniti eius error esse est nihil,
          nisi obcaecati odio quod repellat tempora vero voluptatibus!
        </p>
      </Modal>
    </section>
  )
}

export default EffectSection