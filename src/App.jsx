import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

import Hero from "./sections/Hero"
import Semaforo from "./sections/Semaforo"
import Problema from "./sections/Problema"
import Beneficios from "./sections/Beneficios"
import Garantia from "./sections/Garantia"
import Suscripcion from "./sections/Suscripcion"
import Origen from "./sections/Origen"
import CTA from "./sections/CTA"
import FAQ from "./sections/FAQ"
import Maduracion from "./sections/Maduracion"
import BeneficiosPremium from "./sections/BeneficiosPremium"
import Galeria from "./sections/Galeria"

function App() {
  return (
    <div className="relative">

      <Navbar />

      <Hero />

      <Maduracion />

      <BeneficiosPremium />

      <Galeria />

      <Semaforo />

      <Problema />

      <Beneficios />

      <Garantia />

      <Suscripcion />

      <Origen />

      <FAQ />

      <CTA />

      <Footer />

      <WhatsAppButton />

    </div>
  )
}

export default App