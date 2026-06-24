import { useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from 'lucide-react'
import TiltCard from './TiltCard'
import HudFrame from './HudFrame'

export default function ProjectCard({ project, index }) {
  const [activeImage, setActiveImage] = useState(0)

  const images = project.images || [project.image].filter(Boolean)
  const currentImage = images[activeImage]

  function previousImage() {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    )
  }

  function nextImage() {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    )
  }

  return (
    <TiltCard className="group h-full">
      <HudFrame
        label={`PRJ_${String(index + 1).padStart(2, '0')}`}
        tag={project.featured ? 'FEATURED' : null}
        className={`flex h-full flex-col backdrop-blur transition-all duration-300 ${
          project.featured ? 'bg-surface/80 shadow-glow' : 'bg-surface/60'
        }`}
      >
        {currentImage && (
          <div className="relative mb-5 overflow-hidden rounded-lg border border-white/10">
            <img
              src={currentImage}
              alt={`${project.title} screenshot ${activeImage + 1}`}
              className="h-48 w-full object-full transition-transform duration-700 group-hover:scale-105"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-void/70 text-ink backdrop-blur transition-colors hover:text-accent"
                  aria-label="Previous project screenshot"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-void/70 text-ink backdrop-blur transition-colors hover:text-accent"
                  aria-label="Next project screenshot"
                >
                  <ChevronRight size={18} />
                </button>

                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {images.map((_, imageIndex) => (
                    <button
                      key={imageIndex}
                      type="button"
                      onClick={() => setActiveImage(imageIndex)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeImage === imageIndex
                          ? 'w-5 bg-accent'
                          : 'w-1.5 bg-white/40'
                      }`}
                      aria-label={`Show screenshot ${imageIndex + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <h3 className="font-display text-xl font-semibold text-ink">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4 border-t border-white/10 pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            <Github size={14} />
            Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            <ArrowUpRight size={14} />
            Live
          </a>
        </div>
      </HudFrame>
    </TiltCard>
  )
}