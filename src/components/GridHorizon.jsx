export default function GridHorizon() {
  const particles = [
    { top: '15%', left: '10%', delay: '0s' },
    { top: '25%', left: '80%', delay: '1.2s' },
    { top: '60%', left: '20%', delay: '0.6s' },
    { top: '40%', left: '65%', delay: '2s' },
    { top: '75%', left: '85%', delay: '1.6s' },
    { top: '55%', left: '45%', delay: '0.3s' },
  ]

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-accent2/10 blur-[120px]" />

      <div
        className="absolute inset-x-0 bottom-0 h-1/2 animate-grid-pan opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,240,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.25) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          transform: 'perspective(400px) rotateX(62deg)',
          transformOrigin: 'bottom',
          maskImage: 'linear-gradient(to top, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent/70 animate-float"
          style={{ top: p.top, left: p.left, animationDelay: p.delay }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
    </div>
  )
}