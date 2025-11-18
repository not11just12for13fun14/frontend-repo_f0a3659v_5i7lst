import { useState } from 'react'
import { motion } from 'framer-motion'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true); setError('')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${BACKEND}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setSent(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="relative py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Check availability
        </motion.h2>

        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 sm:p-8">
          {sent ? (
            <div className="text-center text-white">
              <p className="text-xl font-semibold">Thanks! We'll reply shortly.</p>
              <p className="text-blue-200/80 mt-2">We received your request and will email you back.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-blue-200/80">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Your full name"/>
              </div>
              <div>
                <label className="text-sm text-blue-200/80">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="you@email.com"/>
              </div>
              <div>
                <label className="text-sm text-blue-200/80">Guests</label>
                <input type="number" min="1" max="20" name="guests" className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="2"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-blue-200/80">Check in</label>
                  <input type="date" name="check_in" className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"/>
                </div>
                <div>
                  <label className="text-sm text-blue-200/80">Check out</label>
                  <input type="date" name="check_out" className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"/>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-blue-200/80">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Tell us dates, preferences, questions..."/>
              </div>

              {error && <p className="sm:col-span-2 text-red-300">{error}</p>}

              <div className="sm:col-span-2 flex justify-end">
                <button disabled={loading} className="inline-flex items-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-70">
                  {loading ? 'Sending…' : 'Send request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
