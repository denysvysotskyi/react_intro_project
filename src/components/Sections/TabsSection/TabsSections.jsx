import './TabsSections.css'
import Button from '../../Button/Button'

const TabsSections = ({ active, onChange }) => (
  <section>
    <Button isActive={ active === 'main' }
            onClick={ () => onChange('main') }>
      Головна
    </Button>
    <Button isActive={ active === 'feedback' }
            onClick={ () => onChange('feedback') }>
      Обратний зв'язок
    </Button>
  </section>
)

export default TabsSections