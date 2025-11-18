import { motion } from 'framer-motion'
import { Coffee, Wifi, Car, Leaf } from 'lucide-react'

const features = [
  { icon: Coffee, title: 'Gourmet Breakfast', desc: 'Fresh, locally-sourced ingredients served every morning.' },
  { icon: Wifi, title: 'Fast Wi‑Fi', desc: 'Seamless streaming and remote work friendly throughout the house.' },
  { icon: Car, title: 'Free Parking', desc: 'Private on-site parking for a worry-free stay.' },
  { icon: Leaf, title: 'Garden Terrace', desc: 'Relax under the vines with a book and a cup of tea.' },
]

export default function Features() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Comfort, thoughtfully curated
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white shadow-lg shadow-black/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
