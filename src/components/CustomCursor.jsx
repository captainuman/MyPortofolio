// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     function moveCursor(e) {
//       setPosition({ x: e.clientX, y: e.clientY })
//     }

//     window.addEventListener('mousemove', moveCursor)
//     return () => window.removeEventListener('mousemove', moveCursor)
//   }, [])

//   return (
//     <>
//       <motion.div
//         animate={{ x: position.x - 6, y: position.y - 6 }}
//         transition={{ type: 'spring', stiffness: 500, damping: 35 }}
//         className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-accent md:block"
//       />

//       <motion.div
//         animate={{ x: position.x - 20, y: position.y - 20 }}
//         transition={{ type: 'spring', stiffness: 120, damping: 20 }}
//         className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-10 w-10 rounded-full border border-accent/50 md:block"
//       />
//     </>
//   )
// }