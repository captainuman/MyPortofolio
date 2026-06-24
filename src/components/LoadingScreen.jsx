import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-void"
        >
          <div className="text-center">
            <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
              Initializing Portfolio
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}