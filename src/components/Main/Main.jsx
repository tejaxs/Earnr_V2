import './Main.css'
import Navbar from '../Navbar/Navbar'
import Creator from '../Creator/Creator'
import HowItWorks from '../How-it-works/HowItWorks'
import KeyHighlights from '../Key-Highlights/KeyHighlights'
import Roadmap from '../RoadMap/RoadMap'
import Contact from '../Contact/Contact'

function Main() {
  return (
    <div className='main'>
        <Navbar/>
        <Creator/>
        <HowItWorks/>
        <KeyHighlights/>
        <Roadmap/>
        <Contact/>
    </div>
  )
}

export default Main