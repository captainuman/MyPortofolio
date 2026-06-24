import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import HudFrame from './HudFrame'
import { profile } from '../data/content'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

 async function handleSubmit(e) {
  e.preventDefault()

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    alert('Message sent successfully!')
    setForm({ name: '', email: '', message: '' })
  } catch (error) {
    console.error(error)
    alert('Something went wrong. Please try again.')
  }
}

  return (
    <section id="contact" className="scroll-mt-24 py-10">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">// Get in touch</span>
            <h2 className="section-title">Let&apos;s build something worth shipping.</h2>
            <p className="mt-6 max-w-md text-muted">
              Have a project, a role, or just an idea you want to pressure-test? My inbox is open.
            </p>

            <div className="mt-8 space-y-4">
              
                <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent"
                >
                <Mail size={18} /> {profile.email}
                </a>
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={18} /> {profile.location}
              </div>
              <div className="flex gap-3 pt-2">
                <a href={profile.github} target="_blank" rel="noreferrer" className="btn-icon">
                  <Github size={18} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-icon">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <HudFrame label="CONTACT_FORM" tag="SECURE" className="bg-surface/50 backdrop-blur">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-white/10 bg-void/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@email.com"
                    className="w-full rounded-lg border border-white/10 bg-void/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-lg border border-white/10 bg-void/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send message <Send size={16} />
                </button>
              </form>
            </HudFrame>
          </motion.div>
        </div>
      </div>
    </section>
  )
}