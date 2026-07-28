import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import hero1 from '../assets/images/hero-1.webp'
import hero2 from '../assets/images/hero-2.webp'
import hero3 from '../assets/images/hero-3.webp'
import hero4 from '../assets/images/hero-4.webp'

function Hero() {
  const whatsappNumber = '51951311691'
  const whatsappMessage = 'Hola, quisiera solicitar información sobre sus servicios industriales.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const pasarelaImages = [
    hero1,
    hero2,
    hero3,
    hero4
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pasarelaImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [pasarelaImages.length])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-28 pb-10 sm:pb-12">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-900/30 rounded-full filter blur-[80px] sm:blur-[120px] mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="layout-grid items-center">
          
          {/* Left Content (Text) */}
          <motion.div 
            className="col-span-12 lg:col-span-6 flex flex-col justify-center pt-2 lg:pt-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.15] mb-5 sm:mb-8 tracking-tight text-white border-l-4 border-brand-600 pl-4 sm:pl-6 drop-shadow-xl">
              Precisión y <br className="hidden sm:inline" />
              <span className="text-slate-400">confianza</span> industrial.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl mb-6 sm:mb-10 leading-relaxed drop-shadow-md">
              Soluciones especializadas en mantenimiento, montaje e intervención de sistemas industriales críticos. Respaldamos operaciones con un equipo altamente capacitado y estándares exigentes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 relative z-20 w-full sm:w-auto">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-brand-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full sm:w-auto bg-brand-600 hover:bg-brand-500 active:bg-brand-700 transition-colors duration-300 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg text-center flex items-center justify-center border border-brand-500/50 shadow-lg min-h-[48px]"
                >
                  Solicitar Servicio
                </a>
              </div>
              <a
                href="/brochure.pdf"
                download
                className="w-full sm:w-auto glass-panel hover:bg-white/10 active:bg-white/20 transition-colors duration-300 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg text-center border-slate-500 hover:border-slate-300 min-h-[48px] flex items-center justify-center"
              >
                Descargar Brochure
              </a>
            </div>
          </motion.div>

          {/* Right Content (Image Pasarela / Slider) */}
          <motion.div 
            className="col-span-12 lg:col-span-6 relative h-[260px] sm:h-[380px] md:h-[500px] lg:h-[650px] w-full mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Glass Frame */}
            <div className="absolute inset-0 glass-panel rounded-2xl sm:rounded-3xl p-2 sm:p-3 z-10 border border-white/10">
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-var(--color-dark-surface)">
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={currentImageIndex}
                    src={pasarelaImages[currentImageIndex]}
                    alt={`Operación industrial ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>
                
                {/* Gradient overlay to ensure framing looks integrated */}
                <div className="absolute inset-0 bg-gradient-to-t from-var(--color-dark-bg) via-transparent to-transparent opacity-60 z-20 pointer-events-none" />
                
                {/* Pasarela Indicators */}
                <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-30">
                  {pasarelaImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'w-6 sm:w-8 bg-brand-600' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero