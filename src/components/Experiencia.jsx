import { motion } from 'framer-motion'
import proyectoParadaPlanta from '../assets/images/proyecto-parada-planta-cana-brava.webp'
import proyectoMontaje from '../assets/images/proyecto-montaje-cana-brava.webp'
import proyectoUdep from '../assets/images/proyecto-udep-mantenimiento.webp'
import proyectoAgroolmos from '../assets/images/proyecto-agroolmos.webp'

function Experiencia() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const proyectos = [
    {
      id: 1,
      title: "Caña Brava - Parada de Planta anual 2026",
      image: proyectoParadaPlanta
    },
    {
      id: 2,
      title: "Caña Brava - Montaje de válvulas",
      image: proyectoMontaje
    },
    {
      id: 3,
      title: "UDEP - Mantenimiento hidráulico",
      image: proyectoUdep
    },
    {
      id: 4,
      title: "Proyecto AgroOlmos - Montaje Riego Mecanizado",
      image: proyectoAgroolmos
    }
  ]

  const porQueElegirnos = [
    {
      id: 1,
      title: "Excelencia Técnica",
      description: "Equipo capacitado y soluciones precisas."
    },
    {
      id: 2,
      title: "Calidad Garantizada",
      description: "Empresa homologada por HODELPE (2025) con exigentes estándares de seguridad."
    },
    {
      id: 3,
      title: "Innovación Constante",
      description: "Mejora continua para tu productividad."
    }
  ]

  const socios = ["Caña Brava", "Universidad de Piura", "Colegio Vallesol", "Colegio Turicará"]

  return (
    <section id="experiencia" className="py-14 md:py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Bloque 1: ¿Por qué elegirnos? */}
        <motion.div
          className="mb-8 sm:mb-12 border-l-2 border-brand-600 pl-4 sm:pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white">
            Más de 13 años respaldando operaciones
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-24">
          {porQueElegirnos.map((item, index) => (
            <motion.div
              key={index}
              className="p-5 sm:p-6 glass-panel rounded-lg hover:bg-white/5 transition-colors border-l-2 border-l-slate-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-1.5 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bloque 2: Proyectos Destacados */}
        <motion.div
          className="mb-6 sm:mb-10 border-l-2 border-slate-500 pl-4 sm:pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-white">
            Proyectos Destacados
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 mb-14 sm:mb-24">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              className="relative h-[220px] sm:h-[320px] md:h-[400px] rounded-xl overflow-hidden group glass-panel p-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <img
                  src={proyecto.image}
                  alt={proyecto.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[rgba(11,17,32,0.5)] to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
                <div className="absolute inset-0 flex items-end p-4 sm:p-8 z-20">
                  <h4 className="text-base sm:text-xl md:text-2xl font-bold text-white font-heading leading-tight group-hover:text-white transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-500">
                    {proyecto.title}
                    <div className="w-10 sm:w-12 h-1 bg-brand-600 mt-2 sm:mt-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bloque 3: Certificaciones y Socios (Logo Strip) */}
        <div id="certificaciones" className="scroll-mt-24 glass-panel rounded-xl sm:rounded-2xl p-5 sm:p-10 relative overflow-hidden">
          <div className="text-center mb-6 sm:mb-8">
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mb-1.5 sm:mb-2">
              Red de Confianza
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">Nuestros principales clientes y homologaciones recientes</p>
          </div>
          
          {/* Cinta Infinita de Logos */}
          <div className="relative flex overflow-hidden w-full py-4 bg-white/5 rounded-lg sm:rounded-xl border border-white/5">
            <div className="absolute left-0 top-0 w-8 sm:w-16 h-full bg-gradient-to-r from-var(--color-dark-card) to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-8 sm:w-16 h-full bg-gradient-to-l from-var(--color-dark-card) to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex whitespace-nowrap items-center gap-6 sm:gap-10 px-4 sm:px-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              style={{ willChange: "transform" }}
            >
              {/* Primer set */}
              <div className="flex items-center gap-6 sm:gap-10">
                <span className="text-xs sm:text-base font-bold font-heading text-white tracking-wider bg-brand-900/80 px-4 py-2.5 rounded-lg border border-brand-500 shadow-md">
                  HODELPE (HOMOLOGADO 2025)
                </span>
                <span className="text-xs sm:text-base font-bold font-heading text-white tracking-wider bg-brand-900/80 px-4 py-2.5 rounded-lg border border-brand-500 shadow-md">
                  CAÑA BRAVA
                </span>
                <span className="text-xs sm:text-base font-bold font-heading text-white tracking-wider bg-brand-900/80 px-4 py-2.5 rounded-lg border border-brand-500 shadow-md">
                  UNIVERSIDAD DE PIURA (UDEP)
                </span>
                <span className="text-xs sm:text-base font-bold font-heading text-white tracking-wider bg-brand-900/80 px-4 py-2.5 rounded-lg border border-brand-500 shadow-md">
                  COLEGIO VALLESOL
                </span>
                <span className="text-xs sm:text-base font-bold font-heading text-white tracking-wider bg-brand-900/80 px-4 py-2.5 rounded-lg border border-brand-500 shadow-md">
                  COLEGIO TURICARÁ
                </span>
              </div>
              {/* Segundo set (Duplicado para efecto infinito) */}
              <div className="flex items-center gap-6 sm:gap-10">
                <span className="text-xs sm:text-base font-bold font-heading text-white tracking-wider bg-brand-900/80 px-4 py-2.5 rounded-lg border border-brand-500 shadow-md">
                  HODELPE (HOMOLOGADO 2025)
                </span>
                <span className="text-xs sm:text-base font-bold font-heading text-white tracking-wider bg-brand-900/80 px-4 py-2.5 rounded-lg border border-brand-500 shadow-md">
                  CAÑA BRAVA
                </span>
                <span className="text-xs sm:text-base font-bold font-heading text-white tracking-wider bg-brand-900/80 px-4 py-2.5 rounded-lg border border-brand-500 shadow-md">
                  UNIVERSIDAD DE PIURA (UDEP)
                </span>
                <span className="text-xs sm:text-base font-bold font-heading text-white tracking-wider bg-brand-900/80 px-4 py-2.5 rounded-lg border border-brand-500 shadow-md">
                  COLEGIO VALLESOL
                </span>
                <span className="text-xs sm:text-base font-bold font-heading text-white tracking-wider bg-brand-900/80 px-4 py-2.5 rounded-lg border border-brand-500 shadow-md">
                  COLEGIO TURICARÁ
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiencia
