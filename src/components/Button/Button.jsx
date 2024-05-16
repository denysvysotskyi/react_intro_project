import './Button.css'

const Button = ({ children, onClick, isActive }) => (
    <button className={ isActive ? 'button active' : 'button' }
      onClick={ onClick }> { children } </button>
  )

export default Button

export const buttons = [
  {
    id: 1,
    name: 'clickedButton1'
  },
  {
    id: 2,
    name: 'clickedButton2'
  },
  {
    id: 3,
    name: 'clickedButton3'
  }
]

export const differences = {
  clickedButton1: '1111111111111111111dif',
  clickedButton2: '2222222222222222222dif',
  clickedButton3: '3333333333333333333dif'
}