import { LanguageProvider } from './lib/i18n.jsx'
import LanguageToggle from './components/LanguageToggle.jsx'
import Hero from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import Details from './components/Details.jsx'
import Schedule from './components/Schedule.jsx'
import Rsvp from './components/Rsvp.jsx'
import Footer from './components/Footer.jsx'
import Divider from './components/Divider.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <main>
        <Hero />
        <Countdown />
        <Divider />
        <Details />
        <Schedule />
        <Divider />
        <Rsvp />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
