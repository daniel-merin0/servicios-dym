import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CookieBanner from './components/CookieBanner'
import WhatsAppButton from './components/WhatsAppButton'

// Lazy loaded components for performance
const Nosotros = React.lazy(() => import('./components/Nosotros'))
const Servicios = React.lazy(() => import('./components/Servicios'))
const Experiencia = React.lazy(() => import('./components/Experiencia'))
const Contacto = React.lazy(() => import('./components/Contacto'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-32 flex items-center justify-center text-slate-500">Cargando...</div>}>
        <Nosotros />
        <Servicios />
        <Experiencia />
        <Contacto />
        <Footer />
      </Suspense>
      <CookieBanner />
      <WhatsAppButton />
    </>
  )
}

export default App
