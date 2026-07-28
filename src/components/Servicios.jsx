import { motion } from 'framer-motion'
import servicio1 from '../assets/images/servicio-1.webp'
import servicio2 from '../assets/images/servicio-2.webp'
import servicio3 from '../assets/images/servicio-3.webp'
import servicio4 from '../assets/images/servicio-4.webp'
import servicio5 from '../assets/images/servicio-5.webp'
import servicio6 from '../assets/images/servicio-6.webp'

function Servicios() {
  const serviciosPrincipales = [
    { title: "Válvulas y Actuadores", description: "Mantenimiento de válvulas de control y actuadores neumáticos y eléctricos." },
    { title: "Sistemas de Bombeo", description: "Diagnóstico, mantenimiento y optimización de bombas industriales." },
    { title: "Sistemas Contra Incendios", description: "Montaje y mantenimiento de tuberías, hidrantes, bombas y tableros." },
    { title: "Irrigación por Goteo", description: "Instalación y montaje de sistemas de riego eficientes." },
    { title: "Pozos a Tierra", description: "Construcción y mantenimiento para garantizar seguridad." },
    { title: "Sistemas Eléctricos", description: "Tableros eléctricos y tendido de cableado industrial." },
    { title: "Redes Hidráulicas", description: "Mantenimiento y tendido de líneas para diversos fluidos." }
  ]

  const photos = [
    servicio4,
    servicio2,
    servicio3,
    servicio5,
    servicio1,
    servicio6
  ]

  return (
    <section id="servicios" className="py-14 md:py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-16 border-l-2 border-brand-600 pl-4 sm:pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white">
            Nuestros Servicios
          </h2>
        </motion.div>

        {/* Contenedor relativo para delimitación matemática perfecta */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Columna Izquierda: Lista de Servicios (INALTERABLE - Manda el 100% de la altura) */}
          <div className="lg:col-span-6 flex flex-col gap-3.5">
            {serviciosPrincipales.map((servicio, index) => (
              <motion.div
                key={index}
                className="glass-panel p-4 sm:p-5 rounded-lg transition-colors duration-300 hover:bg-white/5 active:bg-white/10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-brand-600 font-mono text-xs sm:text-sm mt-0.5 flex-shrink-0">0{index + 1}</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-1">
                      {servicio.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {servicio.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Columna Derecha: Mosaico Contenido Estrictamente entre el Inicio y Final del Listado */}
          <div className="lg:col-span-6 flex flex-col h-[340px] sm:h-[420px] lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-[calc(50%-1.25rem)] overflow-hidden">
            <div className="grid grid-cols-3 grid-rows-3 gap-2.5 sm:gap-3 h-full max-h-full">
              {/* Foto Principal Destacada (2x2) */}
              <motion.div 
                className="col-span-2 row-span-2 rounded-xl overflow-hidden glass-panel p-1 group flex flex-col h-full min-h-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full relative rounded-lg overflow-hidden flex-1 min-h-0">
                  <img src={photos[0]} alt="Servicio 1" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Foto 2 (Top Derecha) */}
              <motion.div 
                className="col-span-1 row-span-1 rounded-xl overflow-hidden glass-panel p-1 group flex flex-col h-full min-h-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-full h-full relative rounded-lg overflow-hidden flex-1 min-h-0">
                  <img src={photos[1]} alt="Servicio 2" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Foto 3 (Centro Derecha) */}
              <motion.div 
                className="col-span-1 row-span-1 rounded-xl overflow-hidden glass-panel p-1 group flex flex-col h-full min-h-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-full h-full relative rounded-lg overflow-hidden flex-1 min-h-0">
                  <img src={photos[2]} alt="Servicio 3" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Foto 4 (Fila Inferior Izquierda) */}
              <motion.div 
                className="col-span-1 row-span-1 rounded-xl overflow-hidden glass-panel p-1 group flex flex-col h-full min-h-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-full h-full relative rounded-lg overflow-hidden flex-1 min-h-0">
                  <img src={photos[3]} alt="Servicio 4" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Foto 5 (Fila Inferior Centro) */}
              <motion.div 
                className="col-span-1 row-span-1 rounded-xl overflow-hidden glass-panel p-1 group flex flex-col h-full min-h-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-full h-full relative rounded-lg overflow-hidden flex-1 min-h-0">
                  <img src={photos[4]} alt="Servicio 5" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Foto 6 (Fila Inferior Derecha) */}
              <motion.div 
                className="col-span-1 row-span-1 rounded-xl overflow-hidden glass-panel p-1 group flex flex-col h-full min-h-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-full h-full relative rounded-lg overflow-hidden flex-1 min-h-0">
                  <img src={photos[5]} alt="Servicio 6" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
