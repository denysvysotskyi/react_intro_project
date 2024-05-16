import Button from '../../Button/Button'

const TabsSections = ({ active, onChange }) => (
  <section style={{ marginBottom: '15px' }}>
    <Button isActive={ active === 'main' }
            onClick={() => onChange('main')}>
      Головна
    </Button>
    <Button isActive={ active === 'feedback' }
            onClick={() => onChange('feedback')}>
      Обратний зв'язок
    </Button>
  </section>
)

export default TabsSections