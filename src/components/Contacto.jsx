import { motion } from 'framer-motion'

function Contacto() {
  const contactos = [
    {
      nombre: "Manuel Edmundo Merino Chumacero",
      cargo: "Gerente General",
      email: "gerencia@dymindustrial.com",
      telefono: "+51 903 470 016",
      telLink: "51903470016"
    },
    {
      nombre: "Daniel Orestes Merino Nizama",
      cargo: "Supervisor General de Operaciones",
      email: "operaciones@dymindustrial.com",
      telefono: "+51 951 311 691",
      telLink: "+51951311691"
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="contacto" className="py-14 md:py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Título de la Sección */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-3 sm:mb-4">
            Comunícate con Nosotros
          </h2>
        </motion.div>

        {/* Tarjetas de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
          {contactos.map((contacto, index) => (
            <motion.div
              key={index}
              className="glass-panel p-5 sm:p-8 rounded-xl text-center transition-all duration-300 flex flex-col justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative z-10">
                {/* Cargo */}
                <div className="inline-block px-3 sm:px-4 py-1.5 bg-brand-900 text-slate-300 font-mono text-[11px] sm:text-xs rounded-md uppercase tracking-wider mb-4 sm:mb-6 border border-brand-600">
                  {contacto.cargo}
                </div>

                {/* Nombre */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-5 sm:mb-8">
                  {contacto.nombre}
                </h3>
              </div>

              {/* Datos de contacto */}
              <div className="space-y-3 sm:space-y-4 pt-5 sm:pt-6 border-t border-white/5 relative z-10">
                {/* Teléfono / WhatsApp */}
                <a
                  href={`https://wa.me/${contacto.telLink}?text=${encodeURIComponent(`Hola ${contacto.nombre.split(' ')[0]}, requiero información sobre los servicios industriales de D&M.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-slate-300 hover:text-green-400 active:bg-white/5 py-2 px-3 rounded-lg transition-colors group"
                >
                  <svg className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.283-1.122z"/>
                  </svg>
                  <span className="font-mono text-sm sm:text-base font-medium">{contacto.telefono}</span>
                </a>

                {/* Correo */}
                <a
                  href={`mailto:${contacto.email}?subject=${encodeURIComponent('Consulta Servicios Industriales D&M')}`}
                  className="flex items-center justify-center gap-3 text-slate-400 hover:text-white active:bg-white/5 py-2 px-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-brand-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono text-xs sm:text-sm break-all">{contacto.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contacto
