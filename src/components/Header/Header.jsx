import './Header.css'
import logo from '../../images/logo.svg'
import { useState } from 'react'

const Header = () => {

  const [ now, setNow ] = useState(new Date())
  setInterval(() => setNow(new Date()), 1000)

  return (
    <header>
      <img src={ logo } alt='Логотип' />
      <span> Тут буде час: { now.toLocaleTimeString() } </span>
    </header>
  )
}

export default Header