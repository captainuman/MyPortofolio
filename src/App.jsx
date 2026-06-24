import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
// import CustomCursor from './components/CustomCursor'
import GitHubRepos from './components/GitHubRepos'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen loading={loading} />
      {/* <CustomCursor /> */}

      <div className="relative min-h-screen overflow-x-hidden bg-void font-sans text-ink">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <GitHubRepos />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}