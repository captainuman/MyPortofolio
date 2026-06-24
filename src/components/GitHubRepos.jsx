import { useEffect, useState } from 'react'
import { Github, Star, GitFork, ArrowUpRight } from 'lucide-react'
import HudFrame from './HudFrame'
import { profile } from '../data/content'

function getGitHubUsername(url) {
  return url.replace('https://github.com/', '').replace('/', '')
}

export default function GitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  const username = getGitHubUsername(profile.github)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        )

        if (!res.ok) throw new Error('Failed to fetch GitHub repos')

        const data = await res.json()

        setRepos(data.filter((repo) => !repo.fork))
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  return (
    <section id="github" className="scroll-mt-24 bg-surface/30 py-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <span className="section-eyebrow">// GitHub activity</span>
          <h2 className="section-title">Latest repositories from GitHub.</h2>
        </div>

        {loading ? (
          <p className="font-mono text-sm text-muted">Loading repositories...</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <HudFrame
                key={repo.id}
                label="REPOSITORY"
                className="flex h-full flex-col bg-surface/60 backdrop-blur"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <Github className="h-5 w-5 text-accent" />

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-accent"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <h3 className="font-display text-lg font-semibold text-ink">
                  {repo.name}
                </h3>

                <p className="mt-3 flex-1 text-sm text-muted">
                  {repo.description || 'No description added yet.'}
                </p>

                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4 font-mono text-xs text-muted">
                  <span>{repo.language || 'Code'}</span>
                  <span className="flex items-center gap-1">
                    <Star size={14} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={14} /> {repo.forks_count}
                  </span>
                </div>
              </HudFrame>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}