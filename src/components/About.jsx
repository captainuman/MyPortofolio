import { motion } from 'framer-motion'
import { Coffee, MapPin, Rocket, Sparkles } from 'lucide-react'
import TiltCard from './TiltCard'
import HudFrame from './HudFrame'
import { profile } from '../data/content'

export default function About() {
  const facts = [
    { icon: MapPin, label: profile.location },
    { icon: Coffee, label: '500+ cups of coffee' },
    { icon: Rocket, label: '24+ projects shipped' },
    { icon: Sparkles, label: 'Always learning' },
  ]

  return (
    <section id="about" className="scroll-mt-24 py-10 ">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <TiltCard className="mx-auto max-w-sm">
              <HudFrame
                label="PROFILE.SYS"
                tag="ACTIVE"
                className="flex aspect-[4/5] flex-col items-center justify-center bg-surface/80 backdrop-blur"
              >
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-accent to-accent2 opacity-80 blur-[1px]" />
                <p className="mt-6 font-display text-xl">{profile.name}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{profile.role}</p>
              </HudFrame>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">// About me</span>
            <h2 className="section-title">Designing systems as carefully as interfaces.</h2>
            <p className="mt-6 text-muted">{profile.bio}</p>
            <p className="mt-4 text-muted">{profile.bio2}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-surface/40 px-4 py-3"
                >
                  <f.icon className="h-5 w-5 shrink-0 text-accent" />
                  <span className="font-mono text-xs text-muted">{f.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}