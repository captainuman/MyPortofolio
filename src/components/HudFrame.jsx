export default function HudFrame({ children, label, tag, accent = 'cyan', className = '' }) {
  const accentClass = accent === 'violet' ? 'border-accent2' : 'border-accent'

  return (
    <div className={`relative p-6 ${className}`}>
      <span className={`absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 ${accentClass}`} />
      <span className={`absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 ${accentClass}`} />
      <span className={`absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 ${accentClass}`} />
      <span className={`absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 ${accentClass}`} />

      {(label || tag) && (
        <div className="absolute -top-3 left-4 right-4 flex items-center justify-between px-1">
          {label && (
            <span className="bg-void px-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              {label}
            </span>
          )}
          {tag && (
            <span className="bg-void px-2 font-mono text-[10px] uppercase tracking-widest text-accent">
              {tag}
            </span>
          )}
        </div>
      )}

      {children}
    </div>
  )
}