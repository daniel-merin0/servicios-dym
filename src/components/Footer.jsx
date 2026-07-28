import logo from '../assets/logo.png'

function Footer() {
  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Certificaciones', href: '#certificaciones' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <footer className="bg-[#0b1120] text-slate-300 py-8 sm:py-12 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Grid de 4 Columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 border-b border-white/10 pb-8 sm:pb-10">
          {/* Columna 1: Marca */}
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <a href="#inicio" className="inline-block">
              <img
                src={logo}
                alt="Servicios Industriales D&M"
                className="h-16 sm:h-20 w-auto object-contain logo-smoke drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              />
            </a>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xs font-medium">
              Precisión y confianza en cada proceso industrial. Soluciones de montaje y mantenimiento especializado.
            </p>
          </div>

          {/* Columna 2: Mapa del sitio */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold font-heading uppercase tracking-wider mb-4 sm:mb-6 text-white border-l-2 border-brand-600 pl-3">
              Mapa del Sitio
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 py-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold font-heading uppercase tracking-wider mb-4 sm:mb-6 text-white border-l-2 border-brand-600 pl-3">
              Información
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Castilla, Piura, Perú</span>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Contacto Operativo</span>
                <a 
                  href="https://wa.me/51951311691?text=Hola,%20requiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20industriales."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-green-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.283-1.122z"/>
                  </svg>
                  +51 951 311 691
                </a>
                <a href="mailto:operaciones@dymindustrial.com?subject=Consulta%20Servicios%20Industriales%20D%26M" className="text-slate-400 hover:text-white transition-colors break-all text-xs">operaciones@dymindustrial.com</a>
              </li>
              <li className="flex flex-col space-y-1 pt-2 border-t border-slate-800">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Contacto Gerencia</span>
                <a 
                  href="https://wa.me/51903470016?text=Hola,%20requiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20industriales."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-green-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.283-1.122z"/>
                  </svg>
                  +51 903 470 016
                </a>
                <a href="mailto:gerencia@dymindustrial.com?subject=Consulta%20Servicios%20Industriales%20D%26M" className="text-slate-400 hover:text-white transition-colors break-all text-xs">gerencia@dymindustrial.com</a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Desarrollo */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold font-heading uppercase tracking-wider mb-4 sm:mb-6 text-white border-l-2 border-brand-600 pl-3">
              Desarrollo
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
              Sitio web diseñado y desarrollado por <strong className="text-white font-bold">DaTa Solutions</strong>.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 text-center text-xs sm:text-sm text-slate-400">
          <p>© 2026 Servicios Industriales D&M S.R.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
