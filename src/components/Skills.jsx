import { motion } from 'framer-motion'
import HudFrame from './HudFrame'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-surface/30 py-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <span className="section-eyebrow">// Capabilities</span>
          <h2 className="section-title">Tools I reach for when building.</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <HudFrame key={group.category} label={group.category} className="bg-surface/50 backdrop-blur">
              <div className="space-y-5">
                {group.items.map((skill, i) => (
                  <div key={`${group.category}-${skill.name}`}>
                    <div className="mb-2 flex justify-between font-mono text-xs text-muted">
                      <span className="text-ink">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </HudFrame>
          ))}
        </div>
      </div>
    </section>
  )
}