import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github } from 'lucide-react'
import GridHorizon from './GridHorizon'
import HudFrame from './HudFrame'
import { profile, roles, stats } from '../data/content'
import profileImg from '../assets/profile.png'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function useTypewriter(words, speed = 70, pause = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2)
    } else {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <GridHorizon />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-start gap-6 lg:grid-cols-[40%_60%]"> 
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
                Available for new projects · {profile.location}
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
              >
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 font-mono text-lg text-muted sm:text-xl">
                <span className="text-ink">{typed}</span>
                <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-blink bg-accent align-middle" />
              </motion.p>

              <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base text-muted sm:text-lg">
                {profile.tagline}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#projects" className="btn-primary">
                  View Projects
                </a>

                <a href="#contact" className="btn-outline">
                  Get in touch
                </a>

                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline">
                  View Resume
                </a>

                <a href="/resume.pdf" download className="btn-outline">
                  Download Resume
                </a>

                <a href={profile.github} target="_blank" rel="noreferrer" className="btn-icon">
                  <Github size={20} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 lg:mt-16 grid max-w-2xl grid-cols-3 gap-3"
            >
              {stats.map((s) => (
                <HudFrame key={s.label} label={s.label} className="bg-surface/40 backdrop-blur">
                  <div className="font-display text-2xl font-bold sm:text-3xl">{s.value}</div>
                </HudFrame>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative"
            >
            <div className="absolute -inset-24 rounded-full bg-accent/20 blur-[180px]" />
            <div className="absolute -inset-10 rounded-full bg-accent2/10 blur-[90px]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              className="absolute -inset-8 rounded-full border border-dashed border-accent/40"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
              className="absolute -inset-16 rounded-full border border-accent2/20"
            />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent2/10" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

                <img
                  src={profileImg}
                  alt={profile.name}
                  className="relative z-10 h-[280px] sm:h-[380px] md:h-[500px] lg:h-[780px] w-auto object-contain"
                />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,240,255,0.08)_50%,transparent_100%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_6px)] opacity-25" />
              </div>

              <div className="absolute -bottom-6 left-1/2 h-4 w-56 -translate-x-1/2 rounded-full bg-accent/30 blur-2xl" />

              <div className="absolute -right-10 top-16 rounded-lg border border-accent/30 bg-void/70 px-4 py-2 font-mono text-xs text-accent backdrop-blur">
                HOLOGRAM.ACTIVE
              </div>

              <div className="absolute -left-8 bottom-20 rounded-lg border border-accent2/30 bg-void/70 px-4 py-2 font-mono text-xs text-accent2 backdrop-blur">
                UI_ENGINEER
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll down"
      >
        <ArrowDown />
      </motion.a>
    </section>
  )
}