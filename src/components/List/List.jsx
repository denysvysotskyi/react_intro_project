import './List.css'

const List = ({ title, description }) => (
  <li>
    <p>
      <strong> { title } </strong>
      { description }
    </p>
  </li>
)

export default List