import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Certificaciones', href: '#certificaciones' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={`fixed top-0 left-0 w-full bg-[#0b1120]/95 backdrop-blur-md z-50 border-b border-white/10 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-black/30 py-1' : 'py-2 sm:py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center" onClick={closeMenu}>
          <img
            src={logo}
            alt="Servicios Industriales D&M"
            className={`w-auto object-contain transition-all duration-300 logo-smoke ${isScrolled ? 'h-[42px] sm:h-[50px] md:h-[64px]' : 'h-[54px] sm:h-[80px] md:h-[136px]'}`}
          />
        </a>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-8 transition-all duration-300 ${isScrolled ? 'self-center pb-0' : 'self-end pb-4'}`}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-slate-300 hover:text-white font-semibold py-2 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none p-2.5 rounded-lg active:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0b1120]/98 border-t border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="px-5 py-4 flex flex-col space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-slate-200 hover:text-white active:bg-brand-600/20 font-medium py-3 px-3 rounded-lg transition-all duration-150 flex items-center justify-between border-b border-white/5 last:border-0 text-base"
                >
                  <span>{item.name}</span>
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
              
              <div className="pt-3 pb-1">
                <a
                  href="https://wa.me/51951311691?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="w-full bg-brand-600 active:bg-brand-500 text-white font-semibold py-3 px-4 rounded-lg text-center flex items-center justify-center gap-2 shadow-lg text-sm"
                >
                  <span>Solicitar Servicio</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
