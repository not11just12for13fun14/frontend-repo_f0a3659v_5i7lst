import { motion } from 'framer-motion'
import { MapPin, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-indigo-500/20" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }} className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20 text-sm backdrop-blur">
            <Star className="w-4 h-4 text-yellow-300" /> Welcome to
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Your Cozy Guest House Retreat
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Wake up to birdsong, sip coffee on the terrace, and unwind in stylish, sunlit rooms. A peaceful stay, minutes from everything.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#rooms" className="group inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow/50 shadow-sky-500/10 transition hover:shadow-lg">
              Explore Rooms
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/30 text-white px-5 py-3 font-semibold backdrop-blur hover:bg-white/10 transition">
              Book your stay
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
            <MapPin className="w-4 h-4" /> Lakeside • Walk to cafes • Quiet street
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-lg shadow-black/20 border border-white/10" style={{ backgroundImage: `url(https://images.unsplash.com/photo-${['1505691723518-36a5ac3b2a59','1505691938895-1758d7feb511','1505693416388-ac5ce068fe85','1519710164239-da123dc03ef4'][i-1]}?auto=format&fit=crop&w=1200&q=60)` }} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
