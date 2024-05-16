import { data } from '../../Data/data'
import List from '../../List/List'

const MeetSection = () => (
  <section>
    <h3> Наші переваги </h3>
    <ul>
      {
        data.map(item => <List key={item.id} {...item} />)
      }
    </ul>
  </section>
  )

export default MeetSection

