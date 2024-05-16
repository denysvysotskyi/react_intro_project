import './Main.css'
import MeetSection from '../Sections/MeetSection/MeetSection'
import DifferencesSection from '../Sections/DifferencesSection/DifferencesSection'
import IntroSection from '../Sections/IntroSection/IntroSection'
import TabsSections from '../Sections/TabsSection/TabsSections'
import FeedbackSection from '../Sections/FeedbackSection/FeedbackSection'
import { useState } from 'react'

const Main = () => {
  const [ tab, setTab ] = useState('feedback')

  return (
    <main>
      <IntroSection/>
      <TabsSections active={tab}
                    onChange={current => setTab(current)}/>

      {tab === 'main' && (
        <>
          <MeetSection/>
          <DifferencesSection/>
        </>
      )}

      {tab === 'feedback' && (
        <FeedbackSection/>
      )}
    </main>
  )
}

export default Main