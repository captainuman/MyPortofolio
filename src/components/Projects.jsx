import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="section-eyebrow">// Selected work</span>
            <h2 className="section-title">Projects worth talking about.</h2>
          </div>
          <p className="max-w-xs text-sm text-muted">
            A handful of builds spanning dashboards, tools, and experiments.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}