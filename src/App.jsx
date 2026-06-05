import { LanguageProvider } from './lib/i18n.jsx'
import Hero from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import Details from './components/Details.jsx'
import Schedule from './components/Schedule.jsx'
import Moments from './components/Moments.jsx'
import Rsvp from './components/Rsvp.jsx'
import Footer from './components/Footer.jsx'
import Divider from './components/Divider.jsx'

export default function App() {
  return (
    <LanguageProvider>
      {/* Language toggle hidden for now */}
      <main>
        <Hero />
        <Countdown />
        <Divider />
        <Details />
        <Schedule />
        <Divider />
        <Moments />
        <Divider />
        <Rsvp />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
