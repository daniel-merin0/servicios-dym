import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(() => {
    try {
      const saved = localStorage.getItem('cookiesAccepted')
      return saved !== 'true'
    } catch {
      return true
    }
  })

  const handleAccept = () => {
    setIsVisible(false)
    try {
      localStorage.setItem('cookiesAccepted', 'true')
    } catch (e) {
      console.warn("localStorage block: ", e)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="fixed bottom-0 left-0 w-full bg-slate-900/98 backdrop-blur-lg text-white z-50 py-3.5 px-4 sm:py-4 sm:px-6 border-t border-slate-800 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Texto */}
            <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left leading-relaxed max-w-4xl">
              Utilizamos cookies para mejorar tu experiencia en nuestra web. Al navegar por este sitio, aceptas nuestro uso de cookies.
            </p>

            {/* Botón */}
            <button
              onClick={handleAccept}
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 active:scale-95 transition-all text-white font-semibold px-6 py-2.5 rounded-lg text-sm flex-shrink-0 cursor-pointer min-w-[120px] text-center"
            >
              Aceptar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner
