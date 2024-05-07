import './Header.css'
import logo from '../../images/logo.svg'

const time = new Date().toLocaleTimeString()

const Header = () => (
  <header>
    <img src={ logo } alt='Логотип' />
    <span> Тут буде час: { time } </span>
  </header>
)

export default Header