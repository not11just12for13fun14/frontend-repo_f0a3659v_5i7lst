import { motion } from 'framer-motion'

const rooms = [
  {
    name: 'Garden Suite',
    img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b56?q=80&w=1600&auto=format&fit=crop',
    desc: 'King bed • private patio • rain shower',
    price: 140
  },
  {
    name: 'Sea Breeze',
    img: 'https://images.unsplash.com/photo-1542317853-eb0c5f8d05cc?q=80&w=1600&auto=format&fit=crop',
    desc: 'Queen bed • balcony • partial ocean view',
    price: 120
  },
  {
    name: 'Sun Room',
    img: 'https://images.unsplash.com/photo-1505692794403-34d4982a88e6?q=80&w=1600&auto=format&fit=crop',
    desc: 'Double bed • skylight • cozy reading nook',
    price: 95
  }
]

export default function Rooms() {
  return (
    <section id="rooms" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Rooms & Suites
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {rooms.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{r.name}</h3>
                  <span className="text-white/90 font-semibold">${r.price}<span className="text-blue-200/70 text-sm">/night</span></span>
                </div>
                <p className="mt-2 text-blue-100/80 text-sm">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
