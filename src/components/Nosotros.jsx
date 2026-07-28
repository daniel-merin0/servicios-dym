import { motion } from 'framer-motion'
import nosotrosPersonal from '../assets/images/nosotros-personal.webp'

function Nosotros() {
  return (
    <section className="py-14 md:py-24 relative overflow-hidden bg-grid-pattern" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="layout-grid items-center">
          
          {/* Columna Izquierda: Texto */}
          <motion.div 
            className="col-span-12 lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-4 sm:mb-6 border-l-4 border-brand-600 pl-4">
              Más de 13 años de experiencia industrial
            </h2>
            
            <p className="text-slate-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              En <strong className="text-white">Servicios Industriales D&M</strong>, somos especialistas en el mantenimiento, montaje e intervención operativa de sistemas electromecánicos y redes de fluidos.
            </p>
            <p className="text-slate-400 mb-6 sm:mb-10 leading-relaxed text-sm sm:text-base">
              Nuestro enfoque se basa en la precisión técnica, la seguridad y la eficiencia, garantizando que los equipos críticos de nuestros clientes operen sin interrupciones. Respaldados por nuestra homologación con <strong className="text-white">HODELPE (2025)</strong>, nos hemos convertido en el brazo derecho de operaciones en sectores industriales, agroindustriales y corporativos.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="glass-panel p-4 sm:p-6 rounded-lg text-center border-t-2 border-t-brand-600">
                <span className="block text-3xl sm:text-4xl font-bold font-heading text-white mb-1 sm:mb-2">+13</span>
                <span className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider sm:tracking-widest font-mono">Años de Exp.</span>
              </div>
              <div className="glass-panel p-4 sm:p-6 rounded-lg text-center border-t-2 border-t-brand-600">
                <span className="block text-3xl sm:text-4xl font-bold font-heading text-white mb-1 sm:mb-2">100%</span>
                <span className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider sm:tracking-widest font-mono">Compromiso</span>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Imagen/Composición */}
          <motion.div 
            className="col-span-12 lg:col-span-7 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative glass-panel rounded-xl p-2 h-[250px] sm:h-[380px] md:h-[500px]">
              <div className="w-full h-full rounded-lg overflow-hidden relative group">
                <img 
                  src={nosotrosPersonal} 
                  alt="Personal de Servicios Industriales D&M" 
                  className="w-full h-full object-cover object-left transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-var(--color-dark-surface) mix-blend-color opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Nosotros
