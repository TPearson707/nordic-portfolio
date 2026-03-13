// src/App.tsx

import AuroraCanvas from './components/background/AuroraCanvas'
import AuroraErrorBoundary from './components/background/AuroraErrorBoundary'
import Stars from './components/background/Stars'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import FrostRule from './components/ui/FrostRule'
import Hero from './components/sections/Hero'
import Work from './components/sections/Work'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative bg-void min-h-screen text-frost overflow-x-hidden">
      {/* Background layers */}
      <Stars />
      <AuroraErrorBoundary>
        <AuroraCanvas />
      </AuroraErrorBoundary>

      {/* Fixed navigation */}
      <Nav />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <FrostRule rune="ᚠ" />
        <Work />
        <FrostRule rune="ᚢ" />
        <About />
        <FrostRule rune="ᚦ" />
        <Experience />
        <FrostRule rune="ᚨ" />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
