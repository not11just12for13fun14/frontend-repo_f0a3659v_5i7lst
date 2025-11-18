import { useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Features from './components/Features'
import Rooms from './components/Rooms'
import Contact from './components/Contact'

function App() {
  const containerRef = useRef(null)

  const onScrollTo = (e) => {
    e?.preventDefault()
    const id = e?.currentTarget?.getAttribute('href')?.replace('#','')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Your Guest House</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" onClick={onScrollTo} className="hover:text-white/100">Why us</a>
            <a href="#rooms" onClick={onScrollTo} className="hover:text-white/100">Rooms</a>
            <a href="#booking" onClick={onScrollTo} className="hover:text-white/100">Availability</a>
          </nav>
          <a href="#booking" onClick={onScrollTo} className="inline-flex px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold">Book now</a>
        </div>
      </header>

      <main className="pt-20">
        <Hero onScrollTo={onScrollTo} />
        <Features />
        <Rooms />
        <Contact />

        <footer className="py-10 text-center text-blue-200/70">
          <p>© {new Date().getFullYear()} Your Guest House — All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
